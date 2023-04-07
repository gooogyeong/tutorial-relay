import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useQueryLoader } from "react-relay";
import { PosterBylineFragment$key } from './__generated__/PosterBylineFragment.graphql'
import Image from "./Image";
import Hovercard from "./Hovercard";
import PosterDetailsHovercardContents, { PosterDetailsHovercardContentsQuery } from "./PosterDetailsHovercardContents";
import type { PosterDetailsHovercardContentsQuery as PosterDetailsHovercardContentsQueryType } from './__generated__/PosterDetailsHovercardContentsQuery.graphql'

const { useRef } = React

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment @arguments(height: 60, width: 60)
    }
  }
`

export type Props = {
  poster: PosterBylineFragment$key;
};

export default function PosterByline({ poster }: Props): React.ReactElement {
  const data = useFragment(PosterBylineFragment, poster)
  const hoverRef = useRef(null)
  const [hovercardQueryRef, loadHovercardQuery] = useQueryLoader<PosterDetailsHovercardContentsQueryType>(
    PosterDetailsHovercardContentsQuery
  )
  const onBeginHover = () => {
    loadHovercardQuery({ posterID: data.id })
  }

  if (data == null) {
    return null;
  }
  return (
    <div
      ref={hoverRef}
      className="byline"
    >
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
      <Hovercard
        targetRef={hoverRef}
        onBeginHover={onBeginHover}
      >
        <PosterDetailsHovercardContents
          queryRef={hovercardQueryRef}
        />
      </Hovercard>
    </div>
  );
}

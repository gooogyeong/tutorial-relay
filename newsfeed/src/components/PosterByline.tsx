import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import { useFragment, useQueryLoader } from "react-relay";
import type { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";
import Hovercard from './Hovercard'
import type { PosterDetailsHovercardContentsQuery as HovercardQueryType } from './__generated__/PosterDetailsHovercardContentsQuery.graphql'
import PosterDetailsHovercardContents from './PosterDetailsHovercardContents'
import { PosterDetailsHovercardContentsQuery } from "./PosterDetailsHovercardContents";

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
      id 
      name
      profilePicture {
        ...ImageFragment @arguments(width: 60, height: 60)
      }
  }
`;

export type Props = {
  poster: PosterBylineFragment$key
}

export default function PosterByline({ poster }: Props): React.ReactElement {
  const [
    hovercardQueryRef,
    loadHovercardQuery
  ] = useQueryLoader<HovercardQueryType>(PosterDetailsHovercardContentsQuery)

  function onBeginHover() {
    console.log('onBeginHover')
    loadHovercardQuery({ posterID: data.id })
  }

  const data = useFragment(
    PosterBylineFragment,
    poster
  )
  const hoverRef = React.useRef(null)
  if (poster == null) {
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
          // posterID={data.id}
          queryRef={hovercardQueryRef}
        />
      </Hovercard>
    </div>
  );
}

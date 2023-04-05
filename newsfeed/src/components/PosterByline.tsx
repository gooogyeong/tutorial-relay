import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import type { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
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
  const data = useFragment(
    PosterBylineFragment,
    poster
  )
  if (poster == null) {
    return null;
  }
  return (
    <div className="byline">
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
    </div>
  );
}

import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import { useFragment, useLazyLoadQuery } from "react-relay";
import type { NewsfeedQuery as NewsfeedQueryType } from './__generated__/NewsfeedQuery.graphql';

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query 
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery")
  {
    viewer {
      newsfeedStories(after: $cursor, first: $count) {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`

export default function Newsfeed({ }) {
  const queryData = useLazyLoadQuery<NewsfeedQueryType>(
    NewsfeedQuery,
    {},
  );
  const data = useFragment(NewsfeedContentsFragment, queryData)
  const storyEdges = data.viewer.newsfeedStories.edges

  return (
    <div className="newsfeed">
      {/* {stories.map(story => <Story key={story.id} story={story} />)} */}
      {storyEdges.map(storyEdge => <Story key={storyEdge.node.id} story={storyEdge.node} />)}
    </div>
  );
}

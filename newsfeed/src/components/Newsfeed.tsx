import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import { useFragment, useLazyLoadQuery, usePaginationFragment } from "react-relay";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";
import type { NewsfeedQuery as NewsfeedQueryType, NewsfeedQuery$data } from './__generated__/NewsfeedQuery.graphql';
import type { NewsfeedContentsFragment$key } from './__generated__/NewsfeedContentsFragment.graphql'
import type { NewsfeedContentsRefetchQuery as NewsfeedContentsRefetchQueryType } from './__generated__/NewsfeedContentsRefetchQuery.graphql'

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
      newsfeedStories(after: $cursor, first: $count)
      @connection(key: "NewsfeedContentsFragment_newsfeedStories")
      {
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

export default function Newsfeed() {
  const queryData = useLazyLoadQuery<NewsfeedQueryType>(
    NewsfeedQuery,
    {},
  );

  return (
    <div className="newsfeed">
      <NewsfeedContents query={queryData} />
    </div>
  );
}

type Props = {
  query: NewsfeedQuery$data
}

function NewsfeedContents({ query }: Props) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<NewsfeedContentsRefetchQueryType, any>(NewsfeedContentsFragment, query);
  console.log('Newsfeed data', data)
  function onEndReached() {
    loadNext(3)
  }
  const storyEdges = data.viewer.newsfeedStories.edges;
  return (
    <>
      {storyEdges.map(storyEdge =>
        <Story key={storyEdge.node.id} story={storyEdge.node} />
      )}
      <InfiniteScrollTrigger onEndReached={onEndReached} hasNext={hasNext} isLoadingNext={isLoadingNext} />
    </>
  );
}
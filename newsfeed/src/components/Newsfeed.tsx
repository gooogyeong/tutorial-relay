import * as React from "react";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import Story from "./Story";
import { NewsfeedQuery as NewsfeedQueryType } from './__generated__/NewsfeedQuery.graphql'
import { NewsfeedContentFragment$key } from './__generated__/NewsfeedContentFragment.graphql'
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedQuery = graphql`
  query NewsfeedQuery 
  {
    ...NewsfeedContentFragment
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {})
  return (
    <div className="newsfeed">
      <NewsfeedContent viewer={data} />
    </div>
  );
}

const NewsfeedContentFragment = graphql`
  fragment NewsfeedContentFragment on Query 
  @refetchable(queryName: "NewsfeedContentPaginationFragment")
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 3 },
    cursor: { type: "String", defaultValue: null }
  )
  {
    viewer {
      newsfeedStories(first: $count, after: $cursor) 
      @connection(key: "NewsfeedContentFragment_newsfeedStories") {
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

type Props = {
  viewer: NewsfeedContentFragment$key
}

function NewsfeedContent({ viewer }: Props) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(NewsfeedContentFragment, viewer)
  const stories = data.viewer.newsfeedStories.edges
  const onScrollEndReached = () => {
    loadNext(3)
  }
  return (
    <>
      {stories.map(story => <Story key={story.node.id} story={story.node} />)}
      <InfiniteScrollTrigger
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
        onEndReached={onScrollEndReached}
      />
    </>
  )
}
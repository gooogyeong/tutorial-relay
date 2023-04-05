import * as React from "react";
import Story from "./Story";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { NewsfeedQuery as NewsfeedQueryType } from './__generated__/NewsfeedQuery.graphql';

// define GraphQL Query to fetch data
const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      id
      ...StoryFragment,
    }
  }
`;

// const NewsfeedQuery = graphql`
//   query NewsfeedQuery {
//     topStory {
//       title
//       summary
//       createdAt
//       poster {
//         name
//         profilePicture {
//           url
//         }
//       }
//       thumbnail {
//         url
//       }
//     }
//   }
// `;

export default function Newsfeed({ }) {
  const data = useLazyLoadQuery<NewsfeedQueryType>(
    NewsfeedQuery,
    {},
  );
  const stories = data.topStories;

  return (
    <div className="newsfeed">
      {stories.map(story => <Story key={story.id} story={story} />)}
    </div>
  );
}

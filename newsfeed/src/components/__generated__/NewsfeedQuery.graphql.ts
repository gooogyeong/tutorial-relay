/**
 * @generated SignedSource<<104524e6d8a5356620c1f2b13dbc8e70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedQuery$variables = {};
export type NewsfeedQuery$data = {
  readonly topStories: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
  } | null> | null;
  readonly topStory: {
    readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
  } | null;
};
export type NewsfeedQuery = {
  response: NewsfeedQuery$data;
  variables: NewsfeedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "StoryFragment"
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "poster",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "kind": "TypeDiscriminator",
      "abstractKey": "__isActor"
    },
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 60
            },
            {
              "kind": "Literal",
              "name": "width",
              "value": 60
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(height:60,width:60)"
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "height",
          "value": 400
        },
        {
          "kind": "Literal",
          "name": "width",
          "value": 400
        }
      ],
      "kind": "ScalarField",
      "name": "url",
      "storageKey": "url(height:400,width:400)"
    }
  ],
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v9 = {
  "alias": null,
  "args": (v8/*: any*/),
  "concreteType": "CommentsConnection",
  "kind": "LinkedField",
  "name": "comments",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CommentsConnectionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Comment",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            },
            (v5/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cursor",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "comments(first:3)"
},
v10 = {
  "alias": null,
  "args": (v8/*: any*/),
  "filters": null,
  "handle": "connection",
  "key": "StoryCommentsSectionFragment_comments",
  "kind": "LinkedHandle",
  "name": "comments"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewsfeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "topStory",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "topStories",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NewsfeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "topStory",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "topStories",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a19dcfa5cbedf0dd4df941164b214a2d",
    "id": null,
    "metadata": {},
    "name": "NewsfeedQuery",
    "operationKind": "query",
    "text": "query NewsfeedQuery {\n  topStory {\n    ...StoryFragment\n    id\n  }\n  topStories {\n    id\n    ...StoryFragment\n  }\n}\n\nfragment CommentFragment on Comment {\n  text\n}\n\nfragment ImageFragment_1YYarZ on Image {\n  url(height: 400, width: 400)\n}\n\nfragment ImageFragment_3XLoCc on Image {\n  url(height: 60, width: 60)\n}\n\nfragment PosterBylineFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  profilePicture {\n    ...ImageFragment_3XLoCc\n  }\n}\n\nfragment StoryCommentsSectionFragment on Story {\n  comments(first: 3) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        ...CommentFragment\n        __typename\n      }\n      cursor\n    }\n  }\n  id\n}\n\nfragment StoryFragment on Story {\n  title\n  summary\n  createdAt\n  poster {\n    __typename\n    ...PosterBylineFragment\n    id\n  }\n  thumbnail {\n    ...ImageFragment_1YYarZ\n  }\n  ...StoryCommentsSectionFragment\n}\n"
  }
};
})();

(node as any).hash = "b85819f4b2f734510f8c45dbad5cf8de";

export default node;

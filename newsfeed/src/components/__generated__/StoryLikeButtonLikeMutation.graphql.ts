/**
 * @generated SignedSource<<79a3d0e0e40d9cf9b1a86952ad78e143>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type StoryLikeButtonLikeMutation$variables = {
  doesLike: boolean;
  id: string;
};
export type StoryLikeButtonLikeMutation$data = {
  readonly likeStory: {
    readonly story: {
      readonly doesViewerLike: boolean | null;
      readonly id: string;
      readonly likeCount: number | null;
    } | null;
  } | null;
};
export type StoryLikeButtonLikeMutation = {
  response: StoryLikeButtonLikeMutation$data;
  variables: StoryLikeButtonLikeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "doesLike"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "doesLike",
        "variableName": "doesLike"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "StoryMutationResponse",
    "kind": "LinkedField",
    "name": "likeStory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "story",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "likeCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "doesViewerLike",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoryLikeButtonLikeMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "StoryLikeButtonLikeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e6dfb7d3ecfdefff27b194da8224b7f6",
    "id": null,
    "metadata": {},
    "name": "StoryLikeButtonLikeMutation",
    "operationKind": "mutation",
    "text": "mutation StoryLikeButtonLikeMutation(\n  $id: ID!\n  $doesLike: Boolean!\n) {\n  likeStory(id: $id, doesLike: $doesLike) {\n    story {\n      id\n      likeCount\n      doesViewerLike\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "879f08610ec2835e63a73628d1feabea";

export default node;

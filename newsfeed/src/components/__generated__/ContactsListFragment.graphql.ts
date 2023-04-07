/**
 * @generated SignedSource<<fe10e6f73724d43dcce6fc800bc7947e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsListFragment$data = {
  readonly contacts: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContactRowFragment">;
  } | null> | null;
  readonly " $fragmentType": "ContactsListFragment";
};
export type ContactsListFragment$key = {
  readonly " $data"?: ContactsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": require('./ContactsListRefetchFragment.graphql')
    }
  },
  "name": "ContactsListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contacts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContactRowFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "ec7885229d2ca3836cfcc918dcd0fc24";

export default node;

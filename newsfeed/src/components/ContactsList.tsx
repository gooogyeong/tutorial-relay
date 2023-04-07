import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useRefetchableFragment } from "react-relay";
import type { ContactsListFragment$key } from "./__generated__/ContactsListFragment.graphql";
import Card from "./Card";
import ContactRow from "./ContactRow";
import SearchInput from "./SearchInput";

export type Props = {
  viewer: ContactsListFragment$key;
};

const ContactsListFragment = graphql`
  fragment ContactsListFragment on Viewer
  @argumentDefinitions(
    search: {
      type: "String",
      defaultValue: null
    }
  )
  @refetchable(queryName: "ContactsListRefetchFragment")
  {
    contacts(search: $search) {
      id
      ...ContactRowFragment
    }
  }
`;

const { useState, useTransition } = React

export default function ContactsList({ viewer }: Props) {
  const [data, refetch] = useRefetchableFragment(ContactsListFragment, viewer)
  const [searchText, setSearchText] = useState('')
  const [isPending, startTransition] = useTransition()
  const onSearchStringChange = (value: string) => {
    setSearchText(value)
    startTransition(() => {
      refetch({
        search: value
      })
    })
  }
  return (
    <Card dim={true}>
      <h3>Contacts</h3>
      <SearchInput value={searchText} isPending={isPending} onChange={onSearchStringChange} />
      {data.contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </Card>
  );
}

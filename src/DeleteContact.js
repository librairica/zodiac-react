import { useMutation, gql } from '@apollo/client';
import React from 'react';


const DELETE_CONTACT = gql`
	mutation DeleteContact($contactId: ID!) {
    deleteContact(ContactId: $contactId) {
      firstName
      lastName
    }
  }
`

export function DeleteContact(props) {
  // https://www.apollographql.com/docs/react/data/mutations/
  const [deleteContact, { data }] = useMutation(DELETE_CONTACT);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          deleteContact({ variables: { contactId: props.id } }).then(data => console.log("data: " + data));
        }}
      >
        <button type="submit">Delete Contact</button>
      </form>
    </div>
  );
}
import "./ContactList.css"
import { useQuery, useMutation, gql } from '@apollo/client';
import React from 'react';

const GET_CONTACTS = gql`
  query Query {
    getContacts {
      id
      firstName
      lastName
      birthday
    }
  }
`;

const DELETE_CONTACT = gql`
	mutation DeleteContact($contactId: ID!) {
    deleteContact(ContactId: $contactId) {
      firstName
      lastName
    }
  }
`

export function DisplayContacts() {
  console.log("hi")

  const { data } = useQuery(GET_CONTACTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  console.log(data)

  return data && data.getContacts.map(({ id, firstName, lastName, birthday }) => (
      <ContactRow key={id} id={id} firstName={firstName} lastName={lastName} birthday={birthday}></ContactRow>
  ));
}

class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName + " " + this.props.lastName}</td>
        <td>{new Date(this.props.birthday).toISOString().substring(0, 10)}</td>
        <td>
            <button className="delete-button" onClick={() => DeleteContact(this.props.id)}>X</button>
        </td>
      </tr>
    );
  }
}

function DeleteContact(id) {
    console.log("delete " + id)
		const { data } = useMutation(DELETE_CONTACT);
		alert("deleted " + JSON.stringify(data))

}
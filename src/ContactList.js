import "./ContactList.css"
import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { DeleteContact } from "./DeleteContact";

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

export function DisplayContacts() {
  const { data } = useQuery(GET_CONTACTS);
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
            {/* <button className="delete-button" onClick={() => DeleteContact(this.props.id)}>X</button> */}
        <DeleteContact id={this.props.id}></DeleteContact>
				</td>
      </tr>
    );
  }
}
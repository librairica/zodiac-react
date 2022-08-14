// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

import { AddContactForm } from './AddContactForm';

export default function App() {
  return (
    <div class="container">
      <div class="contacts-container">
        <h2>Zodiac Contacts ✨</h2>
        <br/>
        <DisplayContacts />
        <br/>
        <button onClick={addContact}>Add a contact</button>
        <br/>
        <AddContactForm/>
      </div>
    </div>
  );
}

function addContact() {
  console.log("open add contact form")
}

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

function DisplayContacts() {
  console.log("hi")

  const { data } = useQuery(GET_CONTACTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  console.log(data)

  return data && data.getContacts.map(({ id, firstName, lastName, birthday }) => (
    <div key={id}>
      <p>{firstName} {lastName } | {birthday}</p>
      {/* <ContactRow firstName={firstName} lastName={lastName} birthday={birthday}></ContactRow> */}
    </div>
  ));
}

// class ContactRow extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.firstName}</td>
//         <td>{this.props.lastName}</td>
//         <td>{this.props.birthday}</td>
//       </tr>
//     );
//   }
// }
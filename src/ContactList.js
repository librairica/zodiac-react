import "./ContactList.css";
import { useQuery, gql } from "@apollo/client";
import React from "react";
import { DeleteContact } from "./DeleteContact";

const GET_CONTACTS = gql`
  query Query {
    getContacts {
      id
      firstName
      lastName
      birthday
      sunSign
    }
  }
`;

export function DisplayContacts() {
  const { data } = useQuery(GET_CONTACTS);
  return (
    <table className="contacts-table">
      <tbody>
        { data &&
        data.getContacts.map(({ id, firstName, lastName, birthday, sunSign }) => (
          <ContactRow
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            birthday={birthday}
            sunSign={sunSign}
          ></ContactRow>
        ))
        }
      </tbody>
    </table>
  );
}

class ContactRow extends React.Component {
  render() {
    return (
      <tr className="contact-row">
        <td>{this.props.firstName + " " + this.props.lastName}</td>
        <td> {getEmoji(this.props.sunSign)}</td>
        <td>{new Date(this.props.birthday).toISOString().substring(0, 10)}</td>
        <td>
          <DeleteContact id={this.props.id}></DeleteContact>
        </td>
      </tr>
    );
  }
}

function getEmoji(sign) {
  let emoji;
  switch(sign) {
    case "ARIES":
      emoji = "🐏";
      break;
    case "TAURUS":
      emoji = "🐂";
      break;
    case "GEMINI":
      emoji = "👯‍♀️";
      break;
    case "CANCER":
      emoji = "🦀";
      break;
    case "LEO":
      emoji = "🦁";
      break;
    case "VIRGO":
      emoji = "🧝‍♀️";
      break;
    case "LIBRA":
      emoji = "⚖️";
      break;
    case "SCORPIO":
      emoji = "🦂";
      break;
    case "SAGITTARIUS":
      emoji = "🏹";
      break;
    case "CAPRICORN":
      emoji = "🐐";
      break;
    case "AQUARIUS":
      emoji = "👽";
      break;
    case "PISCES":
      emoji = "🐟";
      break;
    default:
      emoji = "🤷🏻‍♀️"
  }
  return emoji;
};
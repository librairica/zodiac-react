// Import everything needed to use the `useQuery` hook
import { AddContactForm } from './AddContactForm';
import { DisplayContacts } from './ContactList';
// import { useState } from 'react';

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
// Import everything needed to use the `useQuery` hook
import { useState } from 'react';
import { AddContactForm } from './AddContactForm';
import { DisplayContacts } from './ContactList';

export default function App() {
  const [showForm, setShowForm] = useState(false)
  if(!showForm) {
    return (
      <div class="container">
        <div class="contacts-container">
          <h2>Zodiac Contacts ✨</h2>
          <DisplayContacts />
          <button onClick={() => setShowForm(!showForm)}>Add a contact</button>
        </div>
      </div>
    );
  } else {
    return (
      <AddContactForm/>
    )
  }
}

function addContact() {
  console.log("open add contact form")
  
}
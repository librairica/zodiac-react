import "./AddContactForm.css"
import React from "react";
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const CREATE_CONTACT = gql`
	mutation Mutation($contactInput: ContactInput) {
		createContact(ContactInput: $contactInput) {
			id
			firstName
			lastName
			birthday
			# birthTimestamp
			# sunSign
			# sunSignEmoji
		}
	}
`;


export function AddContactForm() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const [createContact, { data, loading, error }] = useMutation(CREATE_CONTACT);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
					alert(inputs);
          createContact({ variables: { 
						contactInput: { 
							firstName: inputs.firstName,
							lastName: inputs.lastName,
							birthday: inputs.birthday
						}} 
					})
					inputs = null;
        }}
      >
        <label> First Name: 
					<input type="text" name="firstName" value={inputs.firstName || ""} onChange={handleChange}/>
				</label>
				<label> Last Name: 
					<input type="text" name="lastName" value={inputs.lastName || ""} onChange={handleChange}/>
				</label>
				<label> Birthday: 
					<input type="date" name="birthday" value={inputs.birthday || ""} onChange={handleChange}/>
				</label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}
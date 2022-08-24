import "./AddContactForm.css";
import React from "react";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_CONTACT = gql`
  mutation Mutation($contactInput: ContactInput) {
    createContact(ContactInput: $contactInput) {
      id
      firstName
      lastName
      birthday
    }
  }
`;

export function AddContactForm({toggleForm}) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

	const handleSubmit = (e) => {
		e.preventDefault();
		// alert(JSON.stringify(inputs));

		// boolean representing if all inputs are provided
		const isValid = inputs.firstName && inputs.lastName && inputs.birthday;
		
		if (isValid) {
			createContact({
				variables: {
					contactInput: {
						firstName: inputs.firstName,
						lastName: inputs.lastName,
						birthday: inputs.birthday,
					},
				},
			});
			inputs.firstName = null;
			inputs.lastName = null;
			inputs.birthday = null;
			toggleForm();
		} else {
			alert("You are missing required fields.")
		}
	}

  const [createContact, { data, loading, error }] = useMutation(CREATE_CONTACT);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div id="form-container">
      <div id="add-contact-form">
				<h2>New Contact</h2>
        <form
          onSubmit={handleSubmit}
        >
          <div>
						<label>
							First Name:
							<input
								type="text"
								name="firstName"
								value={inputs.firstName || ""}
								onChange={handleChange}
							/>
						</label>
					</div>
          <div>
						<label>
							Last Name:
							<input
								type="text"
								name="lastName"
								value={inputs.lastName || ""}
								onChange={handleChange}
							/>
						</label>
					</div>
          <div>
						<label>
							Birthday:
							<input
								type="date"
								name="birthday"
								value={inputs.birthday || ""}
								onChange={handleChange}
							/>
						</label>
					</div>
          <div class="button-container"><button type="submit">Add Contact</button></div>
        </form>
      </div>
    </div>
  );
}

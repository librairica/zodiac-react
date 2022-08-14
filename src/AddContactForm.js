import "./AddContactForm.css"
import React from "react";
import { useMutation, gql } from '@apollo/client';

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

function CreateContact(state) {
	useMutation(CREATE_CONTACT);
}

export class AddContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
				firstName: '',
				lastName: '',
				birthday: ''
			};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
			console.log(event.target.name)
			const field = event.target.name
      this.setState({[field]: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.firstName);
      event.preventDefault();
			CreateContact(this.state)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form-container">
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
					<label>
						First Name:
						<input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
					</label>
					<label>
						Last Name:
						<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
					</label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<NameForm />);
  
// export function AddContactForm() {
//   return (
//     <div>
//       <form>
//         <div class="form-container">
//             <label>
//               First Name:
//               <input type="text" name="firstName" />
//             </label>
//             <label>
//               Last Name:
//               <input type="text" name="lastName" />
//             </label>
//             <input type="submit" value="Submit" />
//         </div>
//       </form>
//     </div>
//   );
// }

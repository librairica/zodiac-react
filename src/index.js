import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:5000/",
  cache: new InMemoryCache()
})

// client
//   .query({
//     query: gql`
//       query Query {
//         getContacts {
//           id
//           firstName
//           lastName
//           birthday
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);
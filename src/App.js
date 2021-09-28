import React from 'react';
import './App.css';
import Home from './pages/Home';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import UserProvider from './providers/UserProvider';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/featureditems',
  }),
});
function App() {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <div className="App">
            <Home></Home>
        </div>
      </ApolloProvider>
    </UserProvider>
  );
}

export default App;

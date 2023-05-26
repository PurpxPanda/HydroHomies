import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';


import Bundles from './pages/Bundles';
import Flasks from './pages/Bottles';
import FlavorPacks from './pages/FlavorPacks';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  // change to /graphql for production
  uri: '/graphql',
});

// set up request middleware to attach token to every request as authorization headers
const authLink = setContext((_, { headers }) => {
  // get the token from local storage
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
//  create the Apollo Client instance
const client = new ApolloClient({
  // set up our client to execute the authLink middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export default function App() {
  return (
    // wrap the entire app in the ApolloProvider component and pass in the client
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bundles" element={<Bundles />} />
          <Route exact path="/bottles" element={<Flasks />} />
          <Route exact path="/flavor-packs" element={<FlavorPacks />} />
          <Route exact path="/login" element={<Login />} />
          <Route 
          exact path="/cart" 
          element={Auth.loggedIn() ? <Cart /> : <Login />} 
          />
          <Route exact path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}
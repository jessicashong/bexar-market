import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './index.css';
import Nav from './components/Nav';
import Home from './pages/Home';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Nav />
            <Routes>
            <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/profile" 
                element={<Profile />}
              />
              <Route 
                path="/about" 
                element={<About />}
              />
              <Route 
                path="/store" 
                element={<Store />}
              />
              <Route 
                path="/search" 
                element={<Search />}
              />
            </Routes>
          </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;

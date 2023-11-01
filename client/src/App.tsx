import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './App.css';
import CreateVendor from './Components/CreateVendor/CreateVendor';
import Vendors from './Components/Vendors/Vendors';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App(): JSX.Element {

  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache()
  })

  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <CreateVendor />
          <Vendors />
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;

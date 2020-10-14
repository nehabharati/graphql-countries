import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"
import Countries from "./Countries"

const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Countries />
      </div>
    </ApolloProvider>
  );
}

export default App;

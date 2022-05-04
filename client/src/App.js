import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div> 
          <Nav />
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

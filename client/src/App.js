import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./component/Nav";
import Shop from "./component/ShopList";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Categories from "./component/Categories";
import Detail from "./pages/Detail";
import Cart from "./component/Cart";
import Success from "./pages/Success";
import NoMatch from "./pages/NoMatch";
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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/products/1" element={<Detail />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/success" element={<Success />} />
            <Route exact path="/nomatch" element={<NoMatch />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

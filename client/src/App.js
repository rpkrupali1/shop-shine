import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./component/Nav";
// import Shop from "./component/ShopList";
import Shop from "./pages/Shop"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Detail from "./pages/Detail";
import Cart from "./component/Cart";
import Success from "./pages/Success";
import NoMatch from "./pages/NoMatch";
import OrderHistory from "./pages/OrderHistory";
import ForgotPassword from "./component/ForgotPassword";

import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
          <StoreProvider>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/products/:id" element={<Detail />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/success" element={<Success />} />
              <Route exact path="/nomatch" element={<NoMatch />} />
              <Route exact path="/orderHistory" element={<OrderHistory />} />
              <Route
                exact
                path="/forgotpassword"
                element={<ForgotPassword />}
              />
            </Routes>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

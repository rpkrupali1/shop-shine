import { useQuery } from "@apollo/client";
import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { idbPromise } from "../utils/helpers";
import { QUERY_USER, USER } from "../utils/queries";

function Profile() {
  const [state, dispatch] = useStoreContext();
  const { user } = state;
  const { loading, data: userData } = useQuery(QUERY_USER);
  return (
    <div>
      <h1>Profile Page</h1>
      <div className="container">
        <div className="row">
          <div className="nav col">
            <h1>Hello Krupali</h1>
            <div className="container">
              <button className="row">About Me</button>
              <button className="row">Billing and Payment Info</button>
              <button className="row">Shopping Preference</button>
              <button className="row">Order History</button>
            </div>
          </div>
          <div className="aboutme col">
            <div>About Me</div>
            <div>Order History</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

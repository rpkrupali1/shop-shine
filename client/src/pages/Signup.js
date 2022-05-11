import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import auth from "../utils/auth";
import {ADD_USER} from "../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  return (
    <div>
      <div id="access">
        <div className="signin">
          <div className="container">
            <div className="col-md-4 left2">
              <div className="row">
                <div className="section-title">
                  <h2>Sign Up</h2>
                </div>
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="flex-row space-between my-2 ">
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex-row space-between my-2 ">
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex-row space-between my-2 ">
                      <label htmlFor="email">Email Address:</label>
                      <input
                        className="form-control"
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex-row space-between my-2 ">
                      <label htmlFor="password">Password:</label>
                      <div></div>
                      <input
                        className="form-control"
                        placeholder="*****"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-custom btn-lg">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>

                <div>
                  <p>
                    Already have an account?
                    <Link to='/login'>Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

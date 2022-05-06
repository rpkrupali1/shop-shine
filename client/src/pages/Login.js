import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import auth from "../utils/auth";
import "../assets/styles/successCancel.css";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div id="access">
        <div className="intro">
          <div className="container">
            <div className="col-md-4 left">
              <div className="row">
                <div className="section-title">
                  <h2>Login</h2>
                </div>
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
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
                    <div className="flex-row space-between my-2">
                      <label htmlFor="password">Password:</label>

                      <input
                        className="form-control"
                        placeholder="*****"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {error ? (
                    <div>
                      <p className="text-danger">
                        The provided credentials are incorrect
                      </p>
                    </div>
                  ) : null}
                  <div>
                    <button type="submit" className="btn btn-custom btn-lg">
                      Log In
                    </button>
                  </div>
                  <div>
                    <Link to="/forgotpassword">Forgot Password?</Link>
                  </div>
                </form>
                <div>
                  <p>
                    Dont have an account?
                    <Link to="/signup"> Sign up</Link>
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

export default Login;

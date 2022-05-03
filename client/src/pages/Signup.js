import React from "react";

function Signup() {
  return (
    <div>
      <h2>Welcome to Shop Shine Sign up</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div></div>
          <input
            placeholder="*****"
            name="password"
            type="password"
            id="password"
          />
        </div>
        <div>
          <button>SIGN UP</button>
        </div>
      </form>
      <div>
        <p>
          Dont have an account?
          <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

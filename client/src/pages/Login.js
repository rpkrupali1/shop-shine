import React from "react";

function Login() {
  return (
    <div>
      <h2>Welcome to Shop Shine Login</h2>
      <form>
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
          <button>LOG IN</button>
        </div>
        <div>
          <a href="#">Forgot Password?</a>
        </div>
      </form>
      <div>
        <p>
          Already have an account?
          <a href="#">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

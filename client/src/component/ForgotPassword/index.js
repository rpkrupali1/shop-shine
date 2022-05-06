import React, { useState } from "react";
import {ImConfused} from "react-icons/im"

function ForgotPassword() {
  return (
    <div className="wrapper">
      <p className="icon">
        <ImConfused />
      </p>
      <h2>FORGOT PASSWORD</h2>
      <p className="message">
        Please enter your email address below to receive a password reset link.
      </p>
      <form>
        <div>
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input id="email" placeholder="youremail@test.com" type="email" />
        </div>
        <button className="resetBtn">RESET MY PASSWORD</button>
      </form>
    </div>
  );
}

export default ForgotPassword;

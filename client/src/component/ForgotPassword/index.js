import React, { useState } from "react";
import { ImConfused } from "react-icons/im";
import "../../assets/styles/successCancel.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    return (
      <div>
        <p>Please check your email at {email}</p>
      </div>
    );
  };

  const handleChange = (event) => {
    const emailVal = event.target.value;
    setEmail(emailVal);
  };

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="danger-icon">
          <ImConfused />
        </p>
        <h2>FORGOT PASSWORD</h2>
        <p className="email-msg">
          Please enter your email address below to receive a password reset
          link.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="resetEmail">
            <label htmlFor="email" className="email">
              Email<span className="error-text">*</span>
            </label>
            <input
              id="email"
              placeholder="youremail@test.com"
              type="email"
              onChange={handleChange}
            />
          </div>
          <button className="resetbtn">RESET MY PASSWORD</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

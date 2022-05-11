import React, { useState } from "react";
import { ImConfused } from "react-icons/im";
import { FiCheckCircle } from "react-icons/fi";
import "../../assets/styles/successCancel.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [btnClick, setBtnClick] = useState(false);
  const [header, setHeader] = useState("FORGOT PASSWORD");
  const [desc, setDesc] = useState(
    "Please enter your email address below to receive a password reset link."
  );
  const [iconClass, setIconClass] = useState("danger-icon");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (email) {
      setBtnClick(true);
      setHeader("PASSWORD HAS RESET");
      setDesc(
        `Please check your email, we have sent you an email for password reset at ${email}`
      );
      setIconClass("reset-icon");
    } else setErrorMessage("Please enter valid email id");
  };

  const handleChange = (event) => {
    const emailVal = event.target.value;
    if (emailVal) {
      setEmail(emailVal);
      setErrorMessage("");
    }
  };

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className={iconClass}>
          {btnClick === false ? <ImConfused /> : <FiCheckCircle />}
        </p>
        <h2>{header}</h2>
        <p className="email-msg">{desc}</p>
        {!btnClick && (
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
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="resetbtn">RESET MY PASSWORD</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;

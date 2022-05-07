import React, { useState } from "react";
import { ImConfused } from "react-icons/im";
import "../../assets/styles/successCancel.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [btnClick, setBtnClick] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (email) {
      setBtnClick(true);
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
        <p className="danger-icon">
          <ImConfused />
          {/* {btnClicked === true && <h2>Forgot Password</h2>} */}
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
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="resetbtn">RESET MY PASSWORD</button>
        </form>
        {btnClick && (
          <div>
            <p>
              Please check your email, we have sent you an email for password
              reset {email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;

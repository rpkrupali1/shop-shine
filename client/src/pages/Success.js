import React from "react";
import { BsBagCheckFill } from "react-icons/bs";
import '../assets/styles/successCancel.css'

function Success() {
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <a href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </a>
      </div>
    </div>
  );
}

export default Success;

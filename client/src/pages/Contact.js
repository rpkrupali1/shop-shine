import React, { useState } from "react";
// import { validateEmail } from '../utils/helpers';
import { ADD_CONTACT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { validateEmail } from "../utils/helpers";
import "../assets/styles/contact.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [addContact, { error, reset }] = useMutation(ADD_CONTACT);
  //const [dbError, setDbError] = useState("");

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      (textarea) => (textarea.value = "")
    );
    // this.setState({
    //   itemvalues: [{}]
    // });
  };

  function handleSubmit(e) {
    e.preventDefault();
    //console.log("handl1" + error.message);
    if (!errorMessage) {
      addContact({
        variables: {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
      });
    }
    handleReset();
  }

  const handleChange = (e) => {
    console.log(e.target.className);
    reset();
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is not valid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      //setDbError("");
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                {errorMessage && (
                  <div>
                    <p className="form-text mb-2 form-error">
                      ⚠️ {errorMessage}
                    </p>
                  </div>
                )}

                {error && (
                  <div>
                    <p className="form-text mb-2 form-error">
                      ⚠️ {error.message}
                    </p>
                  </div>
                )}

                <button type="submit" className="btn btn-custom btn-lg">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                1234 Somewhere Really Cool, Beverly Hills, CA 90210
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +1 123 867 5309
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                shop-shine@shine.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={"https://www.facebook.com/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={"https://twitter.com/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={"https://www.youtube.com/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

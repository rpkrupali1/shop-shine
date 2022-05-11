import React, { useState } from "react";
// import { validateEmail } from '../utils/helpers';
import { ADD_CONTACT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { validateEmail } from "../utils/helpers";
import "../assets/styles/contact.css";
import { Box, Modal, Typography } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState(
    "Name, email and message is required"
  );
  const [addContact, { error, reset }] = useMutation(ADD_CONTACT);

  // this ope is used for modal
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      (textarea) => (textarea.value = "")
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      try {
        const { data } = await addContact({
          variables: {
            name: formState.name,
            email: formState.email,
            message: formState.message,
          },
        });
        console.log(data);

        setOpen(true);
      } catch (err) {
        console.error(err);
      }
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
                shopshine4life@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={"https://www.facebook.com/profile.php?id=100081144580549"} target='_blank'>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={"https://twitter.com/shopshine4life"} target='_blank'>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={"https://www.youtube.com/channel/UC7sqcKYYu6cpQOUMuOx831g"} target='_blank'>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Thank You!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="h4" className="contact-modal-message">
            We appreciate you contacting Shop-Shine! You will receive details shortly at{" "}
            {formState.email}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Contact;

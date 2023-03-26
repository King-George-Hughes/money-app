import React from "react";
import Layout from "../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const mailTo = "mailto:info@kudixpress.org";
  const contactTo = "tel:+1 (410) 652-7506";

  return (
    <Layout>
      <div className="contact">
        {/* Career Top */}
        <div className="contact-top">
          <div className="container">
            <h1>Contact Us</h1>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>

        {/* Career Second */}
        <div className="container contact-container">
          <div className="contact--section-1">
            <h2>Get In Touch</h2>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone:{" "}
              <a href={contactTo} className="text-decoration-none ">
                +1 (410) 652-7506
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faVoicemail} /> Email:{" "}
              <a href={mailTo} className="text-decoration-none ">
                info@kudixpress.org
              </a>
            </p>
            <p className="mb-5">
              At kudixpress, we take the security of your personal and financial
              information seriously. Our app uses state-of-the-art encryption
              and security measures to ensure that your information is always
              safe and secure.
            </p>
            <form className="form">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="george"
                  style={{ fontSize: "1.5rem" }}
                ></input>
                <label htmlFor="floatingInput" style={{ fontSize: "1.2rem" }}>
                  User Name..
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="floatingInput"
                  placeholder="name@example.com"
                  style={{ fontSize: "1.5rem" }}
                />
                <label htmlFor="floatingInput" style={{ fontSize: "1.2rem" }}>
                  Email Address
                </label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  name="comment"
                  id="floatingTextarea"
                  placeholder="Leave a comment here"
                  cols="30"
                  rows="10"
                  style={{ height: 150, fontSize: "1.5rem" }}
                ></textarea>
                <label
                  htmlFor="floatingTextarea"
                  style={{ fontSize: "1.2rem" }}
                >
                  Message....
                </label>
              </div>
              <button
                className="btn btn-primary fs-2"
                style={{ background: "#08778d", border: "none" }}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="contact--section-2">
            <img src="../img/T&C.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

import React from "react";
import Layout from "../layout/Layout";

const ContactUs = () => {
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
              Phone: <a href="#">+233 573 849 441</a>
            </p>
            <p>
              Email: <a href="#">hughesgeorgeme@gmail.com</a>
            </p>
            <p>
              At kudixpress, we take the security of your personal and financial
              information seriously. Our app uses state-of-the-art encryption
              and security measures to ensure that your information is always
              safe and secure.
            </p>
            <p>
              <form action="form">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="john"
                  ></input>
                  <label htmlFor="floatingInput">User Name..</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="comment"
                    id="floatingTextarea"
                    placeholder="Leave a comment here"
                    cols="30"
                    rows="10"
                    style={{ height: 100 }}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Comments</label>
                </div>
              </form>
            </p>
          </div>
          <div className="contact--section-2">
            <img src="../img/people.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

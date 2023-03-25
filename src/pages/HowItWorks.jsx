import React from "react";
import Layout from "../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="about">
        {/* Career Top */}
        <div className="about-top">
          <div className="container">
            <h1>How It Works</h1>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>
        {/*  */}
        <div className="howItWorks">
          <div className="container">
            {/* Card One */}
            <div className="row">
              <div className="col-sm-10" style={{ margin: "0 auto" }}>
                <div className="card p-5 mx-2 my-5">
                  <div className="card-subtitle">
                    <h1>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "#08778d" }}
                      />{" "}
                      Sign Up
                    </h1>
                  </div>
                  <div className="card-body">
                    <span className="fs-4" style={{ letterSpacing: "0.8px" }}>
                      Create an account on our app in just a few easy steps.
                      Link your debit card and verify your identity to get
                      started. Enter recipient information: Tell us who you're
                      sending money to in Ghana and how much you want to send.
                      We'll show you the exchange rate and the fees upfront, so
                      you know exactly what you're paying.
                    </span>
                  </div>
                </div>
                {/* Card Two */}
                <div className="card p-5 mx-2 my-5">
                  <div className="card-subtitle">
                    <h1>
                      <FontAwesomeIcon
                        icon={faDollar}
                        style={{ color: "#08778d" }}
                      />{" "}
                      Pay
                    </h1>
                  </div>
                  <div className="card-body">
                    <span className="fs-4" style={{ letterSpacing: "0.8px" }}>
                      Use your linked debit card to pay for your transfer. Our
                      app uses state-of-the-art encryption and security measures
                      to ensure your information is safe and secure.
                    </span>
                  </div>
                </div>
                {/* Card Three */}
                <div className="card p-5 mx-2 my-5">
                  <div className="card-subtitle">
                    <h1>
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ color: "#08778d" }}
                      />{" "}
                      Track your transfer
                    </h1>
                  </div>
                  <div className="card-body">
                    <span className="fs-4" style={{ letterSpacing: "0.8px" }}>
                      You can track your transfer on our app in real-time, so
                      you know exactly where your money is every step of the
                      way. Receive confirmation: Once your transfer is complete,
                      we'll send you and your recipient a confirmation email or
                      text message, so you both know the money has been
                      received.
                    </span>
                  </div>
                </div>
                {/* Card Three */}
                <div className="card p-5 mx-2 my-5 alert-success">
                  <div className="card-body">
                    <span className="fs-4" style={{ letterSpacing: "0.8px" }}>
                      <FontAwesomeIcon
                        icon={faInfo}
                        style={{ color: "#08778d" }}
                      />
                      {".... "}
                      That's it! With kudixpress, you can skip the long lines
                      and complicated forms of traditional remittance methods
                      and send money to Africa in just a few clicks. Plus, our
                      app is available 24/7, so you can send money anytime,
                      anywhere. Join the thousands of happy customers who are
                      already using kudixpress to send money to Ghana. Sign up
                      now and experience fast, secure, and affordable money
                      transfers to your loved ones!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;

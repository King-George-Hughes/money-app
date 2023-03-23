import React from "react";
import Layout from "../layout/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="career">
        {/* Career Top */}
        <div className="career-top">
          <div className="container">
            <h1>About Us</h1>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>

        {/* Career Second */}
        <div className="container career-container">
          <div className="career--section-1">
            <h2>About kudiXpress</h2>
            <p>
              Our company was founded on the principle that everyone should have
              access to fast and affordable remittance services. We know that
              sending money to Africa can be a challenge, which is why we've
              developed a state-of-the-art remittance app that makes it easier
              than ever.
            </p>
            <p>
              Here's how it works: simply sign up for our app, link your debit
              card, and verify your identity. Once you're verified, you can
              start sending money to your loved ones in Africa right from your
              phone. Our app is available 24/7, so you can send money anytime,
              anywhere.
            </p>
            <p>
              At kudixpress, we take the security of your personal and financial
              information seriously. Our app uses state-of-the-art encryption
              and security measures to ensure that your information is always
              safe and secure. Plus, we're authorized to transmit money in the
              US, so you can trust that your money is in good hands. We're proud
              to partner with banks, mobile networks, and other financial
              institutions to bring you the best possible remittance experience.
              Our partnerships help us offer competitive exchange rates and low
              fees, so you can send more money to your loved ones in Ghana. So
              why wait? Sign up for kudixpress today and start sending money to
              Africain seconds. Our app is easy to use, affordable, and secure,
              making it the perfect choice for all your remittance needs. Click
              the "Get Started" or "Sign Up" button now to create your account
              and start sending money today!
            </p>
          </div>
          <div className="career--section-2">
            <img src="../img/people.jpg" className="img-fluid" alt="" />
          </div>
        </div>

        {/* Career Bottom */}
        <div className="container career-bottom">
          <h1 className="display-1 fw-bold text-center mb-3 value-heading">
            Our Values and Commitments
          </h1>
          <div className="career-values">
            <p className="fs-2">
              <span className="value-circle me-5">01</span>
              <span className="l fw-bold">We act like owners - </span>
              Relentlessly delivering for our users and spending money
              thoughtfully.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">02</span>
              <span className="l fw-bold">
                We embrace embarrassing honesty -{" "}
              </span>
              Developing ourselves to better serve others.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">03</span>
              <span className="l fw-bold">We are bias to action - </span>
              We get first outcomes quickly, iterate and learn.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">04</span>
              <span className="l fw-bold">We strive to be better - </span>
              We may make mistakes, but always learn from them. We lean into
              uncomfortable conversations and support our colleagues when they
              do the same.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">05</span>
              <span className="l fw-bold">We are inclusive - </span>
              To better reflect and serve our customers.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;

import React from "react";
import Layout from "../layout/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="about">
        {/* Career Top */}
        <div className="about-top">
          <div className="container">
            <h1>About Us</h1>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>

        {/* Career Second */}
        <div className="container about-container">
          <div className="about--section-1">
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
          <div className="about--section-2">
            <img src="../img/people.jpg" className="img-fluid" alt="" />
          </div>
        </div>

        {/* Career Bottom */}
        <div className="container about-bottom">
          <h1 className="display-1 fw-bold text-center mb-3 value-heading">
            Our Values and Commitments
          </h1>
          <div className="about-values">
            <p className="fs-2">
              <span className="value-circle me-5">01</span>
              <span className="l fw-bold">Customer Focus - </span>
              We always put our customers first, and are committed to providing
              the best possible remittance experience. Accessibility: We believe
              that everyone should have access to affordable and convenient
              remittance services, regardless of their location or financial
              status.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">02</span>
              <span className="l fw-bold">Security - </span>
              We take the security of your personal and financial information
              seriously, and use state-of-the-art encryption and security
              measures to keep your data safe.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">03</span>
              <span className="l fw-bold">Transparency - </span>
              We're committed to being open and transparent about our fees,
              exchange rates, and other important information. Innovation: We're
              always looking for new and better ways to serve our customers, and
              strive to stay ahead of the curve when it comes to remittance
              technology.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">04</span>
              <span className="l fw-bold">Partnership - </span>
              We believe in working collaboratively with banks, mobile networks,
              and other financial institutions to bring you the best possible
              remittance experience.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">05</span>
              <span className="l fw-bold">Trust - </span>
              We know that sending money is a sensitive matter, and we're
              committed to earning and maintaining your trust through honest,
              reliable service.
            </p>
            <p className="fs-2">
              <span className="value-circle me-5">06</span>
              <span className="l fw-bold">Speed and Efficiency - </span>
              We understand that sending money quickly and efficiently is
              important, which is why we offer fast and convenient transfers
              that can be completed in seconds. Affordability: We're committed
              to offering competitive exchange rates and low fees, so that you
              can send more money to your loved ones in Ghana.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;

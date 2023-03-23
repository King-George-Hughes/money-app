import React from "react";
import Layout from "../layout/Layout";

const OurStory = () => {
  return (
    <Layout>
      <div className="our-story">
        {/* Career Top */}
        <div className="our-story-top">
          <div className="container">
            <h1>Send money with love</h1>
            <p>
              kudiXpress has been on a journey of ensuring that we send money to
              people and not fees by ensuring that we offer low fees and high
              guarantees to our users. We have been at the forefront of ensuring
              that sending money is as easy as sending a text message.
            </p>
          </div>
          <img
            src="../img/unknown.svg"
            className="img-fluid"
            alt=""
            style={{ boxShadow: "0px 5px 5px #fff" }}
          />
        </div>

        {/* Career Second */}
        <div className="container our-story-container">
          <div className="our-story--section-1">
            <h5
              className=" fw-bold fs-1 my-5 pb-3"
              style={{ color: "#0a6375" }}
            >
              OUR STORY
            </h5>
            <h2>This is our story…</h2>
            <p>
              At kudixpress, our story is one of passion, innovation, and a
              drive to make a difference in the lives of families and
              communities in Africa.
            </p>
            <p>
              Our journey began when the founders experienced firsthand the
              challenges of sending money to Africa. They saw how traditional
              remittance methods were slow, expensive, and often unreliable.
              They knew there had to be a better way.
            </p>
            <p>
              That's when they set out to develop a remittance app that would
              make sending money to Africa fast, secure, and affordable. They
              worked tirelessly, researching the best technology, partnering
              with financial institutions, and engaging with communities in
              Africa to understand their financial needs.
            </p>
            <p>
              Today, kudixpress is a leading remittance app, trusted by over
              100,000 users. We're proud to be authorized to transmit money in
              the US and we're constantly working to improve our services and
              expand our reach. But our journey doesn't stop there. We remain
              committed to our mission of making a positive impact on families
              and communities in Africa. We believe that access to financial
              services is a fundamental right, and we're dedicated to making
              sending money to Africa as easy and affordable as possible.
            </p>
          </div>
          <div className="our-story--section-2 text-center">
            <img src="../img/onboarding2.jpg" className="img-fluid" alt="" />
            <p
              className="fs-3 fw-bold text-center alert-primary p-5 mt-5"
              style={{ borderRadius: 7 }}
            >
              Join us on our journey and experience the convenience and security
              of sending money with kudixpress. We can't wait to be a part of
              your story!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurStory;

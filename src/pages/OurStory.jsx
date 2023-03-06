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
              guarantees to our users. Founded in 2014, we have been at the
              forefront of ensuring that sending money is as easy as sending a
              text message.
            </p>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>

        {/* Career Second */}
        <div className="container our-story-container">
          <div className="our-story--section-1">
            <h5 className="text-success fw-bold fs-1 my-5 pb-3">OUR STORY</h5>
            <h2>No hassles, no lines, no stress…</h2>
            <p>
              Most recently, we joined forces with WordRemit and together, we
              formed the Zepz Group. We represent brands that disrupted an
              industry previously dominated by offline legacy players by taking
              international money transfers online - making global digital
              payments fairer, faster, and more flexible.
            </p>
          </div>
          <div className="our-story--section-2">
            <img src="../img/phone.png" className="img-fluid" alt="" />
          </div>
        </div>

        {/* Career Bottom */}
        <div className="container our-story-middle py-5">
          <h1 className="display-1 fw-bold text-center mb-3 value-heading">
            Trusted by over 130 Countries and Over 1 million users
          </h1>
          <div className="our-story-values">
            <p
              className="fs-2 text-center my-5"
              style={{ maxWidth: 900, margin: "0 auto" }}
            >
              Our brands helped cross-border communities send over $15bn from 50
              countries, to recipients in 130 countries in 2022. We operate over
              5,000 money transfer corridors worldwide and employ over 1,600
              people globally.
            </p>
            <p
              className="fs-2 text-center my-5"
              style={{ maxWidth: 900, margin: "0 auto" }}
            >
              Zepz is a remote-first employer, with team members located across
              six continents. Our vision is to create a world that celebrates
              migrants’ impact on prosperity, at home and abroad. Our purpose is
              to unlock the prosperity of cross-border communities through
              finance and technology.
            </p>
          </div>
        </div>

        {/* Career Bottom */}
        <div className="container our-story-bottom mt-5 py-5">
          <h1 className="display-1 fw-bold text-center mb-3 value-heading">
            Our leadership team
          </h1>
          <div className="our-story-values">
            <p
              className="fs-2 text-center my-5 "
              style={{ maxWidth: 900, margin: "0 auto" }}
            >
              Created by two engineers from Brown University, Sendwave is
              supported by an outstanding team of compliance officers,
              international bankers, fintech gurus and operational experts from
              Citibank, Chase, Google, Uber, Western Union and other companies.
            </p>
          </div>
        </div>

        {/* Career Bottom */}
        <div className="container our-story-investors mt-5 py-5">
          <h1 className="display-1 fw-bold text-center mb-3 value-heading">
            Our investors
          </h1>
          <div className="our-story-values">
            <p
              className="fs-2 text-center my-5 "
              style={{ maxWidth: 900, margin: "0 auto" }}
            >
              We’re proud to have earned the backing, trust and continued
              support of the Y Combinator, Founders Fund and Khosla Ventures,
              all of whom share our passion for creating technology that can
              make a lasting difference in people’s lives.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurStory;

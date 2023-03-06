import React from "react";
import Layout from "../layout/Layout";

const Career = () => {
  return (
    <Layout>
      <div className="career">
        {/* Career Top */}
        <div className="career-top">
          <div className="container">
            <h1>Join us at kudiExpress</h1>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>

        {/* Career Second */}
        <div className="container career-container">
          <div className="career--section-1">
            <h2>Join us at kudiExpress</h2>
            <p>
              Our team of over 1600+ employees is fully distributed across the
              world. We are working from coffee shops, homes, and co-working
              spaces — making us one of the larger fully distributed
              growth-stage startups in the world. We offer competitive
              compensation, great benefits and a work environment that is aimed
              at setting you up for success!
            </p>
            <p>
              We are proud parents, community organizers, farmers, band members,
              yoga teachers, YouTube influencers, former Olympians, and serial
              entrepreneurs - all committed to making sending money as easy and
              affordable as sending a text.
            </p>
            <p>
              Along with WorldRemit, we’re part of Zepz and we’re all about
              fair, fast, flexible payments. That means we’re creating
              opportunities for our users and their families, who are working to
              support each other while far apart. For them, we are the trusted
              platform connecting them and their money. We ensure that funds get
              where they need to be with speed and security.
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

export default Career;

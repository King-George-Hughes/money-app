import React from "react";
import Card from "../components/Card";
import Layout from "../layout/Layout";
import Slider from "../components/Slider";
import { tutorials } from "../Data/Data";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const link = "#";
  const ourStory = "/our-story";

  const cards = tutorials.map((data) => {
    return <Card key={data.id} data={data} />;
  });

  return (
    <Layout>
      {/* Hero Content */}
      <div className="hero">
        <div className="container hero-container">
          <div className="hero--section-1">
            <h1 className="title">Send money with love</h1>
            <img
              src="../img/love.jpg"
              className="img-fluid mb-5 mt-2 love-img"
              alt=""
            />
            <div>
              <a href={link} className="mx-3">
                <img src="./img/ios-store.png" alt="" />
              </a>
              <a href={link} className="mx-3">
                <img src="./img/android-store.png" alt="" />
              </a>
            </div>
            <p className="mt-4">
              <img src="./img/trustpilot.svg" alt="" />
            </p>
            <p>
              <span className="fs-1 fw-bold me-5">Excellent 4.6</span>
              <span>
                <img src="./img/rate.svg" alt="" />
              </span>
            </p>
          </div>
          <div className="hero--section-2">
            <img src="./img/device.png" alt="" />
          </div>
        </div>
      </div>

      {/* Tutorials */}
      <div className="tuto">
        <div className="container tuto-container">
          <div className="tuto--section-1">
            <img src="./img/onboarding.jpg" alt="" />
          </div>
          <div className="tuto--section-2">
            {cards}
            <p
              className="fs-3 fw-bold text-center alert-primary p-5"
              style={{ borderRadius: 7 }}
            >
              Join the thousands of happy customers who are using kudixpress to
              send money to Ghana. Sign up now and experience fast, convenient,
              and secure money transfers to your loved ones!
            </p>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="slider">
        <div className="container slider-container">
          <h1 className="mb-5">See what our customers say about kudiXpress</h1>
          <div className="slider-article-card">
            <Slider />
          </div>
        </div>
      </div>

      {/* Our story */}
      <div className="story">
        <div className="container story-container">
          <div className="story--section-1 text-center">
            <h1 className="display-1 fw-bold">Our Story</h1>
            <p className="fs-1 my-5">
              At kudiXpress, we're on a mission: to make sure your money gets to
              your friends and family, as safely and effortlessly as possible.
            </p>
            <a
              href={ourStory}
              className="btn btn-primary fs-1 p-4 px-5 btn-story"
            >
              Our Story
            </a>
          </div>
          <div className="story--section-2">
            <img src="../img/story.png" alt="" />
          </div>
        </div>
      </div>

      {/* Get started */}
      <div className="get-started my-5">
        <div className="container get-started-container text-center">
          <h1 className="display-5 fw-bold pt-5">
            Get started sending money to your loved ones
          </h1>
          <p
            className="fs-2 text-muted my-5"
            style={{ maxWidth: 800, margin: "0 auto" }}
          >
            Simply download the app, link your debit card, verify your identity
            and quickly transfer money to your friends and loved ones.
            Seriously, it’s that simple.
          </p>
          <a href={link} className="mx-3">
            <img src="./img/ios-store.png" alt="" />
          </a>
          <a href={link} className="mx-3">
            <img src="./img/android-store.png" alt="" />
          </a>
          <img
            style={{ borderRadius: 25, maxWidth: 500 }}
            src="../img/started.jpg"
            className="w-100 mt-5 p-3"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

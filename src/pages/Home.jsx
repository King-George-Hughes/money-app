import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { tutorials } from "../Data/Data";

const Home = () => {
  const link = "#";

  const cards = tutorials.map((data) => {
    return <Card key={data.id} data={data} />;
  });

  return (
    <>
      {/* Navbar */}
      <Navbar />

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
            <img src="./img/phone.png" alt="" />
          </div>
        </div>
      </div>

      {/* Tutorials */}
      <div className="tuto">
        <div className="container tuto-container">
          <div className="tuto--section-1">
            <img src="./img/phone-2.png" alt="" />
          </div>
          <div className="tuto--section-2">{cards}</div>
        </div>
      </div>

      {/* Slider */}
      <div className="slider">
        <div className="container slider-container">
          <h1 className="mb-5">See what our customers say about Sendwave</h1>
          {/* <div className="card text-center">
            <img src="../img/pic-1.png" alt="" className="slider--img" />
            <h4 className="fw-bold fs-2">Hydee Pichai</h4>
            <h2 className="small fs-3 my-3 fw-normal">The Philippines</h2>
            <img src="../img/stars.svg" alt="" className="slider--rating" />
            <p className="text-muted fs-2 mt-4">
              Sendwave is so fast and convenient to use when I want to send
              money to the Philippines. I use them because they have no fees and
              their rates are amazing.
            </p>
            <button className="slider-btn btn--left">{"<"}</button>
            <button className="slider-btn btn--right">{">"}</button>
          </div> */}
          <Slider />
        </div>
      </div>

      {/* Our story */}
      <div className="story">
        <div className="container story-container">
          <div className="story--section-1 text-center">
            <h1 className="display-1 fw-bold">Our Story</h1>
            <p className="fs-1 my-5">
              At Sendwave, we're on a mission: to make sure your money gets to
              your friends and family, as safely and effortlessly as possible.
            </p>
            <button className="btn btn-primary fs-1 p-4 px-5">Our Story</button>
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

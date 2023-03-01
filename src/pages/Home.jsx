import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { tutorials } from "../Data/Data";

const Home = () => {
  const link = "#";

  const cards = tutorials.map((data) => {
    return <Card key={data.id} data={data} />;
  });

  return (
    <>
      <Navbar />
      {/* Hero Content */}
      <div className="hero bg-warning">
        <div className="container hero-container">
          <div className="hero--section-1">
            <h1 className="title">Send money with love</h1>
            <a href={link} className="mx-3">
              <img src="./img/ios-store.png" alt="" />
            </a>
            <a href={link} className="mx-3">
              <img src="./img/android-store.png" alt="" />
            </a>
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
      <div className="tuto bg-light">
        <div className="container tuto-container">
          <div className="tuto--section-1">
            <img src="./img/phone-2.png" alt="" />
          </div>
          <div className="tuto--section-2">{cards}</div>
        </div>
      </div>
    </>
  );
};

export default Home;

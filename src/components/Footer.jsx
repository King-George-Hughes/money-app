import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const link = "#";
  const homePage = "/";
  const ourStory = "/our-story";
  const career = "/careers";
  const aboutUs = "/about-us";
  const howItWorks = "/how-it-works";
  const contactUs = "/contact-us";

  return (
    <footer className="footer py-4">
      <div className="container footer-container text-center">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ margin: "0 auto" }}
        >
          <span className="me-4 fw-bold display-3">kudiXpress</span>
          <a href={homePage} className="logo">
            <img src="../img/KudiXpress.png" width={150} alt="kudiXpress" />
          </a>
        </div>
        <hr
          className="bg-light my-4 mt-3 w-50"
          style={{ margin: "0 auto", height: 2 }}
        />
        <div className="d-md-flex align-items-center justify-content-center gap-5">
          <div>
            <p className="fs-3 fw-bold mt-5 mb-5" style={{ color: "#ddd" }}>
              At &copy; kudixpress, we believe in transparency when it comes to
              our fees. We strive to keep our fees as low as possible so that
              you can send more money to your loved ones in Africa.{" "}
              <a href={career} className="f link-info">
                Read More..
              </a>
            </p>
            <a href={link} className="mx-3">
              <img src="./img/ios-store.png" alt="" />
            </a>
            <a href={link} className="mx-3">
              <img src="./img/android-store.png" alt="" />
            </a>
          </div>
          <ul className="ul list-unstyled mt-5 fw-bold text-light">
            <li className="fs-2 my-3 mx-5">
              <a
                href={aboutUs}
                className="btn fs-3 btn-outline-light fw-bold"
                style={{
                  width: 150,
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                }}
              >
                About Us
              </a>
            </li>
            <li className="fs-2 my-3 mx-5 py-1">
              <a
                href={howItWorks}
                className="btn fs-3 btn-outline-light fw-bold"
                style={{
                  width: 150,
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                }}
              >
                How it works
              </a>
            </li>
            <li className="fs-2 my-3 mx-5 py-1">
              <a
                href={contactUs}
                className="btn fs-3 btn-outline-light fw-bold"
                style={{
                  width: 150,
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="bg-light my-4 mt-5" style={{ height: 3 }} />
        <span className="fs-4">
          Copyright © {new Date().getFullYear()} kudiXpress | All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

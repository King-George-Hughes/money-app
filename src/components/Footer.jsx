import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const link = "#";
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
          <img src="../img/kudiXpress.png" width={150} alt="" />
        </div>
        <p className="fs-3 fw-bold mt-5 mb-5" style={{ color: "#ddd" }}>
          © Chime Inc. NMLS #1161354 Chime Inc. DBA kudiXpress è autorizzata in
          quanto Transmetteur d'Argent dal Dipartimento dei Servizi Finanziari
          di New York.
        </p>
        <a href={link} className="mx-3">
          <img src="./img/ios-store.png" alt="" />
        </a>
        <a href={link} className="mx-3">
          <img src="./img/android-store.png" alt="" />
        </a>
        <ul className="ul list-unstyled mt-5 fw-bold text-light">
          <li className="fs-2 my-3 mx-5">
            <Link
              to={aboutUs}
              className="btn fs-3 btn-outline-light fw-bold"
              style={{ width: 150, borderTop: "none", borderRight: "none" }}
            >
              About Us
            </Link>
          </li>
          <li className="fs-2 my-3 mx-5 py-1">
            <Link
              to={howItWorks}
              className="btn fs-3 btn-outline-light fw-bold"
              style={{ width: 150, borderTop: "none", borderRight: "none" }}
            >
              How it works
            </Link>
          </li>
          <li className="fs-2 my-3 mx-5 py-1">
            <Link
              to={contactUs}
              className="btn fs-3 btn-outline-light fw-bold"
              style={{
                width: 150,
                borderTop: "none",
                borderRight: "none",
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <hr className="bg-light my-4 mt-5" />
        <span className="fs-4">
          Copyright © {new Date().getFullYear()} kudiXpress | All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

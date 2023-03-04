import React from "react";

const Footer = () => {
  const link = "#";

  return (
    <footer className="footer py-5">
      <div className="container footer-container text-center">
        <p className="fs-3 fw-bold mt-5 mb-4" style={{ color: "#ddd" }}>
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
          <li className="fs-2 my-3 border-bottom mx-5 py-2">AZIENDA</li>
          <li className="fs-2 my-3 border-bottom mx-5 py-2">ASSISTENZA</li>
          <li className="fs-2 my-3 border-bottom mx-5 py-2">LEGA</li>
        </ul>
        <hr className="bg-light my-5" />
        <span className="fs-3">
          Copyright © {new Date().getFullYear()} kudiXpress | All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

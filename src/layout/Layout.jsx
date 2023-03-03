import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contents */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

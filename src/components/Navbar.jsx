import React, { useState } from "react";

const Navbar = () => {
  const link = "#";

  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle((prevState) => !prevState);
  }

  return (
    <nav className="nav">
      <div className="container">
        <a href={link} className="logo">
          LOGO
        </a>
        <div className={toggle ? "menu" : "menu active"}>
          <ul>
            <li>Who we are</li>
            <li>Who it works</li>
            <li>Countries</li>
          </ul>
          <a href={link} className="get-help">
            Get Help
          </a>
          <a href={link}>
            <img src="./img/ios-store.png" alt="" />
          </a>
          <a href={link}>
            <img src="./img/android-store.png" alt="" />
          </a>
        </div>
        <div className="toggle" onClick={toggleMenu}></div>
      </div>
    </nav>
  );
};

export default Navbar;

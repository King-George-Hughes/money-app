import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const homePage = "/";
  const ourStory = "/our-story";
  const link = "#";

  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle((prevState) => !prevState);
  }

  return (
    <nav className="nav">
      <div className="container">
        <a href={homePage} className="logo">
          kudiXpress
        </a>
        <div className={toggle ? "menu" : "menu active"}>
          <ul>
            <li>
              <Link to={homePage}>Who we are</Link>
            </li>
            <li>
              <Link to={ourStory}>Who it works</Link>
            </li>
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

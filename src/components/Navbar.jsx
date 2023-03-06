import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const homePage = "/";
  const ourStory = "/our-story";
  const career = "/careers";
  const link = "#";

  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle((prevState) => !prevState);
  }

  return (
    <nav className="nav">
      <div className="container">
        <Link to={homePage} className="logo">
          kudiXpress
        </Link>

        {/* Nav */}
        <div className="top-menu">
          <ul className="list-unstyled ul-1">
            <li>
              <Link to={homePage} className="link current">
                Home
              </Link>
            </li>
            <li>
              <Link to={ourStory} className="link">
                Our Story
              </Link>
            </li>
            <li>
              <Link to={career} className="link">
                Careers
              </Link>
            </li>
            <li>
              <Link className="link">Get Help</Link>
            </li>
            {/* <li>
              <FontAwesomeIcon icon={faUser} />
            </li> */}
          </ul>
          <ul className="ul-2 list-unstyled">
            <li>
              <Link className="btn btn-success btn-lg link">Download App</Link>
            </li>
          </ul>
        </div>

        {/* Hidden Nav */}
        <div className={toggle ? "menu" : "menu active"}>
          <ul>
            <li>
              <Link className="text-decoration-none" to={homePage}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" to={ourStory}>
                Our Story
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" to={career}>
                Careers
              </Link>
            </li>
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

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
        {/* <Link to={homePage} className="logo"> */}
        <a href={homePage} className="logo">
          <img src="../img/logo.png" alt="" />
        </a>

        {/* Nav */}
        <div className="top-menu">
          <ul className="list-unstyled ul-1">
            <li>
              {/* <Link to={homePage} className="link current"> */}
              <a href={homePage} className="link current">
                Home
              </a>
            </li>
            <li>
              {/* <Link to={ourStory} className="link"> */}
              <a href={ourStory} className="link">
                Our Story
              </a>
            </li>
            <li>
              {/* <Link to={career} className="link"> */}
              <a href={career} className="link">
                Careers
              </a>
            </li>
            <li>
              {/* <Link className="link">Get Help</Link> */}
              <a href={link} className="link">
                Get Help
              </a>
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
              {/* <Link className="text-decoration-none" to={homePage}> */}
              <a className="text-decoration-none" href={homePage}>
                Home
              </a>
            </li>
            <li>
              {/* <Link className="text-decoration-none" to={ourStory}> */}
              <a className="text-decoration-none" href={ourStory}>
                Our Story
              </a>
            </li>
            <li>
              {/* <Link className="text-decoration-none" to={career}> */}
              <a className="text-decoration-none" href={career}>
                Careers
              </a>
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

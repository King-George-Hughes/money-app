import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const homePage = "/";
  const ourStory = "/our-story";
  const career = "/careers";
  const aboutUs = "/about-us";
  const howItWorks = "/how-it-works";
  const contactUs = "/contact-us";
  const link = "#";

  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle((prevState) => !prevState);
  }

  return (
    <nav className="nav">
      <div className="container">
        <NavLink to={homePage} className="logo">
          <img src="../img/KudiXpress.png" alt="" />
        </NavLink>

        {/* Nav */}
        <div className="top-menu">
          <ul className="list-unstyled ul-1">
            <li>
              <NavLink
                to={homePage}
                className={({ isActive }) =>
                  isActive ? "link current" : "link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={aboutUs}
                className={({ isActive }) =>
                  isActive ? "link current" : "link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={howItWorks}
                className={({ isActive }) =>
                  isActive ? "link current" : "link"
                }
              >
                How It Works
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ourStory}
                className={({ isActive }) =>
                  isActive ? "link current" : "link"
                }
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to={career}
                className={({ isActive }) =>
                  isActive ? "link current" : "link"
                }
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to={contactUs}
                className={({ isActive }) =>
                  isActive ? "link current" : "link"
                }
              >
                Contact Us
              </NavLink>
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
              <a href={homePage} className="text-decoration-none">
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

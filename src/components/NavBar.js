import React, { useState } from "react";
import logo from "../images/myLogo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [humIcon, setHumIcon] = useState(false);

  let toHome = useNavigate();

  const scrollToContact = () => {
    toHome("/");
    scroll();
  };

  async function scroll() {
    let contactMe = document.getElementById("contactMe");
    try {
      window.scrollTo({
        top: contactMe.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } catch (e) {
      console.log("hi");
    }
  }
  return (
    <header className="flex jc-sb" id="navBar">
      <Link to="/">
        <img src={logo} className="logo1" alt="" />
      </Link>
      <nav>
        <ul className={`menu flex ${humIcon ? "" : "display"}`} id="menu">
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/certifications">Certifications</Link>
          </li>
          <li>
            <Link to="/cv">Download My Cv</Link>
          </li>
          <li>
            <Link to="/todayquote">quote of today</Link>
          </li>
          <li className="btn" onClick={() => scrollToContact()}>
            Contact Me
          </li>
        </ul>
        {/* <i className="fas fa-bars show" id="humIcon"></i> */}
        <FontAwesomeIcon
          icon={faBars}
          className="show"
          id="humIcon"
          onClick={() => {
            setHumIcon(!humIcon);
          }}
        />
      </nav>
    </header>
  );
};

export default NavBar;

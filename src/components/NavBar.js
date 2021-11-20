import React, { useRef, useState } from "react";
import logo from "../images/myLogo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [humIcon, setHumIcon] = useState(false);

  //   let humIcon = document.getElementById("humIcon")

  // humIcon.addEventListener("click" , ()=>{
  //     menu.classList.toggle("display")
  // })

  // console.log(contactMe);

  const scrollToContact = () => {
    let contactMe = document.getElementById("contactMe");
    window.scrollTo({
      top: contactMe.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

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

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faMobile,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import myLogo from "../images/myLogo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footerBorder"></div>
      <div>
        <img src={myLogo} className="footerLogo" alt="" />
        <div className="flex jc-sb footerIcons">
          <a href="https://github.com/ashrafess00">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/achraf-essaoudi-792980165/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="mailto:achrafess1937@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </a>
          <a href="https://wa.me/212699229443" className="flex jc-c">
            <FontAwesomeIcon icon={faMobileAlt} />
            <div className="number">+212699229443</div>
          </a>
        </div>
      </div>
      <p className="copyright">CopyRight © Ashraf Essaoudi</p>
    </footer>
  );
};

export default Footer;

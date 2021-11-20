import React from "react";
import certificationOne from "../../images/certifications/responsive-design.png";
import certificationTwo from "../../images/certifications/js.png";
import certificationThree from "../../images/certifications/frameWorks.png";

const Certifications = () => {
  return (
    <section className="certifications">
      <div>
        <img src={certificationOne} alt="" />
        <button className="btn">
          <a href="https://www.freecodecamp.org/certification/ashrafess010/responsive-web-design">
            click to see more about this Certification
          </a>
        </button>
      </div>
      <div>
        <img src={certificationTwo} alt="" />
        <button className="btn">
          <a href="https://www.freecodecamp.org/certification/ashrafess010/javascript-algorithms-and-data-structures">
            click to see more about this Certification
          </a>
        </button>
      </div>
      <div>
        <img src={certificationThree} alt="" />
        <button className="btn">
          <a href="https://www.freecodecamp.org/certification/ashrafess010/front-end-development-libraries">
            click to see more about this Certification
          </a>
        </button>
      </div>
    </section>
  );
};

export default Certifications;

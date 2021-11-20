import React from "react";
import { skills } from "../PortfolioObjectOne.js/skills";

const Skills = () => {
  return (
    <section className="skillsSection">
      <h2>
        Ski<span>lls</span>
      </h2>
      <div className="skillsIconsContainer flex cl jc-c" data-aos="fade-right">
        {skills.map((sk) => {
          return (
            <div className="flex cl al-i">
              {/* <i className="fab fa-html5 skillsIcon-html"></i> */}
              {sk.icon}
              <p>{sk.id}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

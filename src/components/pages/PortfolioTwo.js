import React, { useEffect } from "react";
import { projects } from "../../Objects/ProjectsTwo";

const PortfolioTwo = () => {
  useEffect(() => {
    const portfolioContainer = document.querySelectorAll(".portfolioContainer");

    portfolioContainer.forEach((pc) => {
      pc.addEventListener("click", () => {
        pc.firstElementChild.classList.toggle("show");
      });
    });
  });
  return (
    <div>
      <section className="portfolio">
        <h2>
          Port<span>folio</span>
        </h2>
        <div className="portfolioGrid">
          {projects.map((project) => {
            return (
              <div className="portfolioContainer">
                <div className="Projectinfo display">
                  <p>{project.info}</p>
                  <button className="btn infoBtn">
                    <a href={project.link} target="_blank">
                      see the website
                    </a>
                  </button>
                </div>
                <img
                  src={project.image}
                  alt={project.id}
                  width="311"
                  heigth="250"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PortfolioTwo;

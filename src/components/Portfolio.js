import React, { useEffect, useRef } from "react";
import { projects } from "../Objects/PortfolioOne";

const Portfolio = () => {
  useEffect(() => {
    const portfolioContainer = document.querySelectorAll(".portfolioContainer");

    portfolioContainer.forEach((pc) => {
      pc.addEventListener("click", () => {
        pc.firstElementChild.classList.toggle("show");
      });
    });
  });

  return (
    <section className="portfolio">
      <h2 data-aos="fade-left">
        Port<span>folio</span>
      </h2>
      <div className="portfolioGrid">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="portfolioContainer"
              data-aos={project.aosAction}
              // onClick={(e) => me(e)}
            >
              <div className="Projectinfo">
                <p>{project.info}</p>
                <button className="btn infoBtn">
                  <a href={project.link} target="_blank">
                    see the website
                  </a>
                </button>
              </div>
              <img src={project.image} alt={project.id} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

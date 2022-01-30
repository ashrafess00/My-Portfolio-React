import React, { useEffect } from "react";
import { projects } from "../Objects/PortfolioOne";
import { Link } from "react-router-dom";

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
              // eslint-disable-next-line react/jsx-no-duplicate-props
              key={Date.now() + Math.random()}
            >
              <div className="Projectinfo">
                <p>{project.info}</p>
                <button className="btn infoBtn">
                  <a href={project.link} target="_blank" rel="noreferrer">
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
      <button className="btn seeMore">
        <Link to="portfolio">see more</Link>
      </button>
    </section>
  );
};

export default Portfolio;

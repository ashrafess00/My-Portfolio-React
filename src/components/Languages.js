import React, { useEffect } from "react";

const Languages = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.querySelector(".langsContainer")) {
        if (
          window.scrollY >=
          document.querySelector(".langsContainer").offsetTop - 300
        ) {
          let n = document.querySelectorAll(".langCon");
          n.forEach((e) => {
            e.firstElementChild.style.width = e.firstElementChild.dataset.width;
          });
        }
      }
    });
  });
  return (
    <section id="languages">
      <h2>languages</h2>

      <div className="langsContainer flex">
        <h3>Arabic</h3>
        <div className="langCon">
          <div data-width="100%"></div>
        </div>

        <h3>English</h3>
        <div className="langCon">
          <div data-width="80%"></div>
        </div>

        <h3>French</h3>
        <div className="langCon">
          <div data-width="7%"></div>
        </div>
      </div>
    </section>
  );
};

export default Languages;

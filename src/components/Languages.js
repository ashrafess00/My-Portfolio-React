import React, { useEffect, useRef } from "react";

const Languages = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {});

    window.addEventListener("scroll", () => {
      console.log("hi");
      if (document.querySelector(".langsContainer")) {
        if (
          window.scrollY >=
          document.querySelector(".langsContainer").offsetTop - 300
        ) {
          document.documentElement.style.setProperty(
            "--arabicAnim",
            "arabic 1s forwards"
          );
          document.documentElement.style.setProperty(
            "--englishAnim",
            "english 1s forwards"
          );
          document.documentElement.style.setProperty(
            "--frenchAnim",
            "french 1s forwards"
          );
          console.log("hello");
        }
      }
    });
  });
  return (
    <section id="languages">
      <h2>languages</h2>

      <div className="langsContainer">
        <h3>Arabic</h3>
        <div className="langCon arabic"></div>
        <h3>English</h3>
        <div className="langCon english"></div>
        <h3>French</h3>
        <div className="langCon french"></div>
      </div>
    </section>
  );
};

export default Languages;

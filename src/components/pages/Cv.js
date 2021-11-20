import React from "react";
import cv from "../../docs/Ash-CV.pdf";

const Cv = () => {
  return (
    <iframe
      src={cv}
      type="application/pdf"
      style={{ height: "100vh", width: "50%", margin: "auto" }}
    />
  );
};

export default Cv;

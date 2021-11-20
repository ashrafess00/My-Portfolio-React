import "./style/style.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import PortfolioTwo from "./components/pages/PortfolioTwo";
import Certifications from "./components/pages/Certifications";
import Footer from "./components/Footer";
import Cv from "./components/pages/Cv";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioTwo />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

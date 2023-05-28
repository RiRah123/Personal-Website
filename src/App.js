import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./components/Particle";
import { Element, scroller } from 'react-scroll';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50, // Adjust the scroll offset if needed
      isDynamic: true, // Enable dynamic scroll (useful for responsive designs)
    });
  };
  

  return (
    <Router>
      <Particle />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Element name="scroll-to-element" className="scroll-element">
          <AnimatedRoutes />
          <Footer />
        </Element>
        <div className="scroll-down" onClick={handleScroll}>
          <span></span>
        </div>
      </div>
    </Router>
  );
}

export default App;

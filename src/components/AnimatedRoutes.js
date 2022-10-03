import React from 'react';
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import {
    Route,
    Routes,
    Navigate,
    useLocation
  } from "react-router-dom";
import {AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div>
        <AnimatePresence inital={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
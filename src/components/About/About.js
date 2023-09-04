import React from "react";
import { Container } from "react-bootstrap";
import GitHub from "./GitHub";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import ToolStack from "./ToolStack";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Container fluid className="about-section">
        <Container>
          <Fade left>
            <AboutCard />
            <h1 className="project-heading">
              My <strong className="purple">Experience</strong>
            </h1>
          </Fade>
          <Experience />
          <Fade left>
            <h1 className="project-heading">
              <strong className="purple">
                Languages & Frameworks & Libraries
              </strong>
            </h1>
            <TechStack />
            <h1 className="project-heading">
              Developer <strong className="purple">Tools</strong>
            </h1>
            <ToolStack />
            <GitHub />
          </Fade>
        </Container>
      </Container>
    </motion.div>
  );
}

export default About;

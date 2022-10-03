import React from "react";
import { Container } from "react-bootstrap";
import GitHub from "./GitHub";
import TechStack from "./TechStack";
import Aboutcard from "./AboutCard";
import ToolStack from "./ToolStack";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.4}}}>
      <Container fluid className="about-section">
          <Container>
            <Aboutcard/>
            <h1 className="project-heading">
              <strong className="purple"> Languages </strong> & <strong className="purple"> Frameworks </strong> & <strong className="purple"> Libraries </strong>
            </h1>
            <TechStack/>
            <h1 className="project-heading">
              Developer <strong className="purple"> Tools </strong>
            </h1>
            <ToolStack/>
            <GitHub/>
          </Container>
      </Container>
    </motion.div>
  );
}

export default About;

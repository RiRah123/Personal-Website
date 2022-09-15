import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import GitHub from "./GitHub";
import TechStack from "./TechStack";
import Aboutcard from "./AboutCard";
import ToolStack from "./ToolStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle/>
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
  );
}

export default About;

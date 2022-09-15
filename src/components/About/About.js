import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./GitHub";
import Techstack from "./TechStack";
import Aboutcard from "./AboutCard";
import Toolstack from "./ToolStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Aboutcard />
        <h1 className="project-heading">
          <strong className="purple"> Languages </strong> & <strong className="purple"> Frameworks </strong> & <strong className="purple"> Libraries </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          Developer <strong className="purple"> Tools </strong>
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;

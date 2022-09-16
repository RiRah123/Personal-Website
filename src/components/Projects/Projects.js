import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NCRGo from "../../Assets/images/ncr-go.png";
import UNIXTerminalShell from "../../Assets/images/unix-terminal-shell.png";
import ITunesSearchAPIApp from "../../Assets/images/itunes-search-api-app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few <strong className="purple"> projects </strong> I've worked over my academic years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NCRGo}
              isBlog={false}
              title="NCR Go"
              description="A React Native application built for NCR's Global Hackathon that provides an efficient shopping solution for customers by detecting a product's availability and in-store location (aisles) with computer vision technology."
              ghLink="https://github.com/RiRah123/NCR-Go"
              demoLink="https://www.youtube.com/watch?v=eCDzSWLUD4g"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UNIXTerminalShell}
              isBlog={false}
              title="UNIX Terminal Shell"
              description= "A rudimentary shell built in C that mimicks the core functionality of the UNIX shell (including pipelining, IO redirection, and foreground or background processing) by prompting the user for a UNIX command and displaying the appropiate output (if any) after excueting that command."
              ghLink="https://github.com/RiRah123/UNIX-Terminal-Shell"
              demoLink="https://youtu.be/dlJn5VeZZUw"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ITunesSearchAPIApp}
              isBlog={false}
              title="iTunes Search API App"
              description= "A JavaFX GUI Application, which displays a gallery of 20+ artwork images based on the search results of iTunes Search API App"
              ghLink="https://github.com/RiRah123/iTunes-Search-API-App"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

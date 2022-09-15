import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NCRGo from "../../Assets/images/ncr-go.png" 

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
              description="A React Native application built for NCR's Global Hackathon, which detects a product's avability and in-store location through computer vision technology"
              ghLink="https://github.com/RiRah123/NCR-Go"
              demoLink="https://www.youtube.com/watch?v=eCDzSWLUD4g"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

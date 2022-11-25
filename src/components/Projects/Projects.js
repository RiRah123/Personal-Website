import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import EatCode from "../../Assets/images/eatcode.gif";
import Audur from "../../Assets/images/audur.gif";
import NCRGo from "../../Assets/images/ncr-go.gif";
import UNIXTerminalShell from "../../Assets/images/unix-terminal-shell.gif";
import ITunesSearchAPIApp from "../../Assets/images/itunes-search-api-app.gif";
import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.4}}}>
      <Container fluid className="project-section">
        <Container>
          <Fade left>
          <h1 className="project-heading">
            My Recent <strong className="purple"> Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few <strong className="purple"> projects </strong> I've worked over my academic years.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={EatCode}
                isBlog={false}
                title="Eatcode"
                description="A free food-theme technical interview training website that provides software engineers a unique 3D UI and hundreds of data structure structure/algorithmic style questions with relatively fast solution testing"
                ghLink="https://github.com/eatcode-gt/eatcodeweb"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Audur}
                isBlog={false}
                title="Audur"
                description="An Imgur clone website that allows users to securely upload audio files and anonymously share them without the need of creating an external account"
                ghLink="https://github.com/RiRah123/Audur"
                demoLink="https://youtu.be/XPAxgZLrGkM"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={NCRGo}
                isBlog={false}
                title="NCR Go"
                description="A React Native application built for NCR's Global Hackathon which provides an efficient shopping solution for customers by detecting a product's availability and in-store location (aisles) with computer vision technology."
                ghLink="https://github.com/RiRah123/NCR-Go"
                demoLink="https://www.youtube.com/watch?v=eCDzSWLUD4g"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={UNIXTerminalShell}
                isBlog={false}
                title="UNIX Terminal Shell"
                description= "A rudimentary shell built in C that mimics the core functionality of the UNIX shell (including pipelining, IO redirection, and foreground or background processing) by prompting the user for a UNIX command and displaying the appropriate output (if any) after executing that command."
                ghLink="https://github.com/RiRah123/UNIX-Terminal-Shell"
                demoLink="https://youtu.be/dlJn5VeZZUw"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ITunesSearchAPIApp}
                isBlog={false}
                title="iTunes Search API App"
                description= "A JavaFX GUI application that displays a gallery of 20+ artwork images based on the results of a user-entered query from the iTunes Search API."
                ghLink="https://github.com/RiRah123/iTunes-Search-API-App"
                demoLink=""
              />
            </Col>
          </Row>
          </Fade>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Projects;

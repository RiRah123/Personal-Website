import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import EatCode from "../../Assets/images/eatcode.gif";
import Audur from "../../Assets/images/audur.gif";
import NCRGo from "../../Assets/images/ncr-go.gif";
import InvenTracker from "../../Assets/images/inventracker.gif";
import CandyCombaters from "../../Assets/images/candy-combaters.gif";
import UNIXTerminalShell from "../../Assets/images/unix-terminal-shell.gif";
import TransportationFatalityVisualisation from "../../Assets/images/transportation-fatality-visualisation.gif";
import AFrame3DReplica from "../../Assets/images/aframe-3d-replica.gif";
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
            My Pieces of <strong className="purple"> Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few <strong className="purple"> projects </strong> I've worked on over my academic years:
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={EatCode}
                isBlog={false}
                title="EatCode"
                description="A free food-theme technical interview training website that provides software engineers a unique 3D UI and hundreds of data structure structure/algorithmic style questions with relatively fast solution testing."
                ghLink="https://github.com/eatcode-gt/eatcodeweb"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Audur}
                isBlog={false}
                title="Audur"
                description="An Imgur clone website that allows users to securely upload audio files and anonymously share them without the need of creating an external account."
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
                imgPath={InvenTracker}
                isBlog={false}
                title="InvenTracker"
                description= "A mobile application prototype built in Figma that improves the management of food-related items for food bank employers and volunteers by placing orders, notifying donors, and updating stocks effectively."
                fgLink="https://www.figma.com/file/RaRNYJhW1ycLjeEplvmy8m/InvenTracker-Prototype?node-id=0%3A1&t=YqOAAp3rYnXqhwd3-1"
                demoLink="https://www.figma.com/proto/RaRNYJhW1ycLjeEplvmy8m/InvenTracker-Prototype?node-id=3%3A45&starting-point-node-id=3%3A45"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={CandyCombaters}
                isBlog={false}
                title="Candy Combaters"
                description= "A two-player candy-themed game built with JavaScript and HTML Canvas, where each player controls their character using the keyboard and fights one another in a brawl to the death."
                ghLink="https://github.com/RiRah123/Candy-Combaters"
                demoLink="https://rirah123.github.io/Candy-Combaters/"
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
                imgPath={TransportationFatalityVisualisation}
                isBlog={false}
                title="Transportation Fatality Visualisation"
                description= "A D3.js multi-line chart visualization, illustrating and comparing the fatality rates (per 100k) for different modes of transportation from 1975 to 2020."
                ghLink="https://github.com/RiRah123/Transportation-Fatality-Visualisation"
                demoLink="rirah123.github.io/Transportation-Fatality-Visualisation/"
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
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={AFrame3DReplica}
                isBlog={false}
                title="A-Frame 3D Replica"
                description= "A VR enviorment of Vincent Willem van Gogh's Wheatfield with Crows that was built using the A-Frame library."
                ghLink="https://github.com/RiRah123/Aframe-3D-Image-Replica"
                demoLink="https://rirah123.github.io/Aframe-3D-Image-Replica/"
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

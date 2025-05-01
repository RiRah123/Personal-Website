import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import DuolingoRedesign from "./DuolingoRedesign";
import AnilingoProject from "./AnilingoProject";

function EducationalTechnology() {
  const [activeProject, setActiveProject] = useState("duolingo");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Container fluid className="project-section" style={{ minHeight: '100vh', paddingBottom: '5rem' }}>
        <Container>
          <Fade left>
            <h1 className="project-heading">
              Educational <strong className="purple">Technology</strong> Portfolio
            </h1>
            <p style={{ color: "white", marginBottom: "2rem" }}>
              Explore my work in <strong className="purple">educational technology</strong> and learning experience design:
            </p>

            <Nav
              variant="pills"
              className="justify-content-center"
              style={{ marginBottom: "2.5rem" }}
              onSelect={(selectedKey) => setActiveProject(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link 
                  eventKey="duolingo"
                  active={activeProject === "duolingo"}
                  style={{
                    backgroundColor: activeProject === "duolingo" ? "#c770f0" : "transparent",
                    color: activeProject === "duolingo" ? "white" : "#c770f0",
                    border: "1px solid #c770f0",
                    margin: "0 10px",
                    cursor: "pointer"
                  }}
                >
                  Duolingo Redesign
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  eventKey="anilingo"
                  active={activeProject === "anilingo"}
                  style={{
                    backgroundColor: activeProject === "anilingo" ? "#c770f0" : "transparent",
                    color: activeProject === "anilingo" ? "white" : "#c770f0",
                    border: "1px solid #c770f0",
                    margin: "0 10px",
                    cursor: "pointer"
                  }}
                >
                  Anilingo Project
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
              <Col md={12} style={{ overflow: "visible" }}>
                {activeProject === "duolingo" && <DuolingoRedesign />}
                {activeProject === "anilingo" && <AnilingoProject />}
              </Col>
            </Row>
          </Fade>
        </Container>
      </Container>
    </motion.div>
  );
}

export default EducationalTechnology; 
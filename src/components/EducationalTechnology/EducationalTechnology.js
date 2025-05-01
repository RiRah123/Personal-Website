import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import DuolingoRedesign from "./DuolingoRedesign";
import AnilingoProject from "./AnilingoProject";

function EducationalTechnology() {
  const [activeProject, setActiveProject] = useState("duolingo");

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-section" style={{ 
      minHeight: '100vh',
      background: '#0F1624',
      width: '100%',
      position: 'relative',
      paddingTop: '50px'
    }}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-heading">
            Educational <strong className="purple">Technology</strong> Portfolio
          </h1>
          <p style={{ 
            color: "white", 
            marginBottom: "2rem",
            fontSize: "1.1rem"
          }}>
            Explore my work in <strong className="purple">educational technology</strong> and learning experience design:
          </p>

          <Nav
            variant="pills"
            className="justify-content-center"
            style={{ marginBottom: "2.5rem" }}
            onSelect={(selectedKey) => {
              setActiveProject(selectedKey);
              // Reset scroll position when switching projects
              window.scrollTo(0, 0);
            }}
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
                  cursor: "pointer",
                  padding: "0.5rem 1rem"
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
                  cursor: "pointer",
                  padding: "0.5rem 1rem"
                }}
              >
                Anilingo Project
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            {activeProject === "duolingo" && <DuolingoRedesign />}
            {activeProject === "anilingo" && <AnilingoProject />}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

export default EducationalTechnology;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.4}}}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World!{" "} <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <div style={{ paddingLeft: 50, paddingBottom: 40, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: "I'm Rian Rahman",
                    autoStart: true,
                    loop: false,
                  }}
                />
              </div>
              <div style={{ paddingLeft: 50, paddingTop: 10, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Full Stack Developer",
                      "UI/UX Designer",
                      "Undergraduate Researcher",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 90 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                id="home-logo"
                style={{ maxHeight: "800px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Home;

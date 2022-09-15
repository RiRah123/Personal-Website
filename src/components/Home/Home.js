import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle/>
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
            <Col md={5} style={{ paddingBottom: 120 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

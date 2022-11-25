import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.svg";
import coding from "../../Assets/images/code-emoji.gif";
import java from "../../Assets/java.svg";
import Tilt from "react-parallax-tilt";

function AboutCard() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Rian Rahman. Currently, I am a third year Computer Science <img src={coding} alt="coding" height="25px" 
              width="25px" /> major at  <i> <strong className="purple"> Georgia Institute of Technology </strong> </i> 🐝 with a concentration in 
              Artificial Intelligence 🤖 and Information Internetworks 🌐. I have experience in full stack development through previous academic courses 
              and internships, but I tend to prefer working on the frontend for applications and projects.
              <br/> 
              <br/>
              I am proficent in several programming languages as listed below, but <i> <strong className="purple"> Java </strong> </i> 
              <img src={java} alt="java" height="25px" width="25px" /> is by far my favorite!
              <br/>
              <br/>
              I am passionate about various sectors of Computer Science. My field of interest's include developing new <i> <strong className="purple"> Web 
              Products </strong> and <strong className="purple"> Pages </strong> </i> 🖥️ and areas related to {" "} <i> <strong className="purple"> Data 
              Visualization </strong> </i> 💹 and <i> <strong className="purple"> User Interface Design </strong> </i> 🖌️.
              <br/>
              <br/>
              Outside of school, I enjoy various hobbies, including playing chess ♟, listening to music 🎵, and watching anime ⛩️!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutCard;

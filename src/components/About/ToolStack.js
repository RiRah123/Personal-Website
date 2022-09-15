import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJira,
  SiPostman,
  SiFigma,
  SiGnuemacs,
  SiGit,
} from "react-icons/si";
import { AiFillGithub,} from "react-icons/ai";
import { FaTerminal } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnuemacs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;

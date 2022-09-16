import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCplusplus,
  SiJava,
  SiReact,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMaterialui,
  SiNextdotjs,
  SiChartdotjs,
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython/>
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChartdotjs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot/>
      </Col>
    </Row>
  );
}

export default Techstack;

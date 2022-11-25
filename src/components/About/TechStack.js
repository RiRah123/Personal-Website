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
import SkillBar from 'react-skillbars';

function Techstack() {
  const skillLevel= [
    [{type: 'Java', level: 100}],
    [{type: 'Python', level: 60}],
    [{type: 'C++', level: 55}],
    [{type: 'Javascript', level: 70}],
    [{type: 'Typescript', level: 35}],
    [{type: 'React', level: 50}],
    [{type: 'MUI', level: 40}],
    [{type: 'Next.js', level: 25}],
    [{type: 'Chart.js', level: 15}],
    [{type: 'Springboot', level: 15}],
  ];

  const colors = {
    bar: '#72EF36',
    title: {
      text: '$fff',
      background: '#8A2BE2',
    },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", display: "flex" }}>
      <Col xs={5} md={2} className="tech-icons">
        <SiJava/>
        <SkillBar skills={skillLevel[0]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython/>
        <SkillBar skills={skillLevel[1]} colors={colors} height={15} animationDelay={100}/>
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus/>
        <SkillBar skills={skillLevel[2]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript/>
        <SkillBar skills={skillLevel[3]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
        <SkillBar skills={skillLevel[4]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact/>
        <SkillBar skills={skillLevel[5]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui/>
        <SkillBar skills={skillLevel[6]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs/>
        <SkillBar skills={skillLevel[7]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChartdotjs/>
        <SkillBar skills={skillLevel[8]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot/>
        <SkillBar skills={skillLevel[9]} colors={colors} height={15} animationDelay={100}/>
      </Col>
    </Row>
  );
}

export default Techstack;

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
import SkillBar from 'react-skillbars';

function Toolstack() {
  const skillLevel= [
    [{type: 'Jira', level: 40}],
    [{type: 'Postman', level: 20}],
    [{type: 'Figma', level: 35}],
    [{type: 'Terminal', level: 65}],
    [{type: 'Emacs', level: 55}],
    [{type: 'Git', level: 85}],
    [{type: 'GitHub', level: 75}],
  ];

  const colors = {
    bar: '#72EF36',
    title: {
      text: '$fff',
      background: '#8A2BE2',
    },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira/>
        <SkillBar skills={skillLevel[0]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman/>
        <SkillBar skills={skillLevel[1]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
        <SkillBar skills={skillLevel[2]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal/>
        <SkillBar skills={skillLevel[3]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnuemacs/>
        <SkillBar skills={skillLevel[4]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
        <SkillBar skills={skillLevel[5]} colors={colors} height={15} animationDelay={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub/>
        <SkillBar skills={skillLevel[6]} colors={colors} height={15} animationDelay={100}/>
      </Col>
    </Row>
  );
}

export default Toolstack;

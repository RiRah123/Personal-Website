import React from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import {
  SiJira,
  SiPostman,
  SiFigma,
  SiGnuemacs,
  SiGit,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaTerminal } from "react-icons/fa";
import SkillBar from "react-skillbars";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ToolStack() {
  const skillLevel = [
    { type: 'Jira', level: 40 },
    { type: 'Postman', level: 20 },
    { type: 'Figma', level: 35 },
    { type: 'Terminal', level: 65 },
    { type: 'Emacs', level: 55 },
    { type: 'Git', level: 85 },
    { type: 'GitHub', level: 75 },
  ];

  const toolsPerSlide = 3;

  const totalSlides = Math.ceil(skillLevel.length / toolsPerSlide);

  const slides = Array.from(Array(totalSlides).keys());

  return (
    <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      {slides.map((slide, slideIndex) => (
        <div key={slideIndex}>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {renderToolsForSlide(slideIndex)}
          </Row>
        </div>
      ))}
    </Carousel>
  );
}

function renderToolsForSlide(slideIndex) {
  const skillLevel = [
    { type: 'Jira', level: 40 },
    { type: 'Postman', level: 20 },
    { type: 'Figma', level: 35 },
    { type: 'Terminal', level: 65 },
    { type: 'Emacs', level: 55 },
    { type: 'Git', level: 85 },
    { type: 'GitHub', level: 75 },
  ];

  const toolsPerSlide = 3;
  const startIndex = slideIndex * toolsPerSlide;
  const endIndex = startIndex + toolsPerSlide;
  const tools = skillLevel.slice(startIndex, endIndex);

  return tools.map((tool, index) => (
    <Col key={index} xs={4} md={2} className="tech-icons">
      {renderTool(tool)}
    </Col>
  ));
}

function renderTool(tool) {
  const { type, level } = tool;

  const ToolIcon = getToolIcon(type);

  const colors = {
    bar: '#72EF36',
    title: {
      text: '$fff',
      background: '#8A2BE2',
    },
  };

  return (
    <>
      {ToolIcon && <ToolIcon />}
      <SkillBar
        skills={[{ type, level }]}
        colors={colors}
        height={15}
        animationDelay={100}
      />
    </>
  );
}

function getToolIcon(type) {
  switch (type) {
    case 'Jira':
      return SiJira;
    case 'Postman':
      return SiPostman;
    case 'Figma':
      return SiFigma;
    case 'Terminal':
      return FaTerminal;
    case 'Emacs':
      return SiGnuemacs;
    case 'Git':
      return SiGit;
    case 'GitHub':
      return AiFillGithub;
    default:
      return null;
  }
}

export default ToolStack;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
import SkillBar from "react-skillbars";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TechStack() {
  const skillLevel = [
    { type: 'Java', level: 100 },
    { type: 'Python', level: 60 },
    { type: 'C++', level: 55 },
    { type: 'Javascript', level: 70 },
    { type: 'Typescript', level: 35 },
    { type: 'React', level: 50 },
    { type: 'MUI', level: 40 },
    { type: 'Next.js', level: 25 },
    { type: 'Chart.js', level: 15 },
    { type: 'Springboot', level: 15 },
  ];

  const toolsPerSlide = 5;
  const totalSlides = Math.ceil(skillLevel.length / toolsPerSlide);
  const slides = Array.from(Array(totalSlides).keys());

  const colors = {
    bar: '#72EF36',
    title: {
      text: '#fff',
      background: '#8A2BE2',
    },
  };

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
          <Container>
            <Row
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
                display: "flex",
              }}
            >
              {renderToolsForSlide(
                slideIndex,
                toolsPerSlide,
                skillLevel,
                colors
              )}
            </Row>
          </Container>
        </div>
      ))}
    </Carousel>
  );
}

function renderToolsForSlide(slideIndex, toolsPerSlide, skillLevel, colors) {
  const startIndex = slideIndex * toolsPerSlide;
  const endIndex = startIndex + toolsPerSlide;
  const tools = skillLevel.slice(startIndex, endIndex);

  return tools.map((tool, index) => (
    <Col key={index} xs={4} md={2} className="tech-icons">
      {renderTool(tool)}
      <SkillBar
        skills={[tool]}
        colors={colors}
        height={15}
        animationDelay={100}
      />
    </Col>
  ));
}

function renderTool(tool) {
  const { type } = tool;

  const ToolIcon = getToolIcon(type);

  return ToolIcon ? <ToolIcon /> : null;
}

function getToolIcon(type) {
  switch (type) {
    case 'Java':
      return SiJava;
    case 'Python':
      return SiPython;
    case 'C++':
      return SiCplusplus;
    case 'Javascript':
      return SiJavascript;
    case 'Typescript':
      return SiTypescript;
    case 'React':
      return SiReact;
    case 'MUI':
      return SiMaterialui;
    case 'Next.js':
      return SiNextdotjs;
    case 'Chart.js':
      return SiChartdotjs;
    case 'Springboot':
      return SiSpringboot;
    default:
      return null;
  }
}

export default TechStack;

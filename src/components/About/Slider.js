import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillBar from "react-skillbars";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    SiJira,
    SiPostman,
    SiFigma,
    SiGnuemacs,
    SiGit,
  } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaTerminal } from "react-icons/fa";

function Slider({ data, toolsPerSlide }) {
  const totalSlides = Math.ceil(data.length / toolsPerSlide);
  const slides = Array.from(Array(totalSlides).keys());

  const colors = {
    bar: "#72EF36",
    title: {
      text: "#fff",
      background: "#8A2BE2",
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
                data,
                colors
              )}
            </Row>
          </Container>
        </div>
      ))}
    </Carousel>
  );
}

function renderToolsForSlide(slideIndex, toolsPerSlide, data, colors) {
  const startIndex = slideIndex * toolsPerSlide;
  const endIndex = startIndex + toolsPerSlide;
  const tools = data.slice(startIndex, endIndex);

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
    case "Java":
      return SiJava;
    case "Python":
      return SiPython;
    case "C++":
      return SiCplusplus;
    case "Javascript":
      return SiJavascript;
    case "Typescript":
      return SiTypescript;
    case "React":
      return SiReact;
    case "MUI":
      return SiMaterialui;
    case "Next.js":
      return SiNextdotjs;
    case "Chart.js":
      return SiChartdotjs;
    case "Springboot":
      return SiSpringboot;
    case "Jira":
      return SiJira;
    case "Postman":
      return SiPostman;
    case "Figma":
      return SiFigma;
    case "Terminal":
      return FaTerminal;
    case "Emacs":
      return SiGnuemacs;
    case "Git":
      return SiGit;
    case "GitHub":
      return AiFillGithub;
    default:
      return null;
  }
}

export default Slider;

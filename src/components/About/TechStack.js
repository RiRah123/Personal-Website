import React from "react";
import Slider from "./Slider";

const TechStackData = [
  { type: "Java", level: 100 },
  { type: "Python", level: 60 },
  { type: "C++", level: 55 },
  { type: "Javascript", level: 70 },
  { type: "Typescript", level: 35 },
  { type: "React", level: 50 },
  { type: "MUI", level: 40 },
  { type: "Next.js", level: 25 },
  { type: "Chart.js", level: 15 },
  { type: "Springboot", level: 15 },
];

function TechStack() {
  return <Slider data={TechStackData} toolsPerSlide={5} />;
}

export default TechStack;

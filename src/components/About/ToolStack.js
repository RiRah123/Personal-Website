import React from "react";
import Slider from "./Slider";

const ToolStackData = [
  { type: "Jira", level: 40 },
  { type: "Postman", level: 20 },
  { type: "Figma", level: 35 },
  { type: "Terminal", level: 65 },
  { type: "Emacs", level: 55 },
  { type: "Git", level: 85 },
  { type: "GitHub", level: 75 },
];

function ToolStack() {
  return <Slider data={ToolStackData} toolsPerSlide={3} />;
}

export default ToolStack;

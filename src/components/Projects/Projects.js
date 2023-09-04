import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import TimelineFilter from "./TimelineFilter";

const projectData = [
  {
    imgPath: require("../../Assets/images/mfChess.gif"),
    isBlog: false,
    title: "mfChess",
    description:
      "A a cutting-edge React app offering a seamless online chess experience where users can games, analyze moves with Stockfish, and customize profiles.",
    ghLink: "https://github.com/mfChess",
    demoLink: "https://mfchess.com",
    date: new Date("2023-01-01"),
  },
  {
    imgPath: require("../../Assets/images/nfl-career-combine.gif"),
    isBlog: false,
    title: "NFL Combine & Career Analysis",
    description:
      "A data analysis project examining the correlation between combine performance and first-year success of offensive players in the NFL to improve player evaluation and training strategies.",
    ghLink: "https://github.com/RiRah123/NFL-Combine-Career-Score-Analysis",
    demoLink: "https://youtu.be/a9U-S2o8GM8",
    date: new Date("2023-01-01"),
  },
  {
    imgPath: require("../../Assets/images/poke-island.gif"),
    isBlog: false,
    title: "Poke Island",
    description:
      "An immersive Pokemon-inspired adventure, where players explore a meticulously crafted island map, engage in captivating battles, and uncover Poke-Island's secrets.",
    ghLink: "https://github.com/RiRah123/Poke-Island",
    date: new Date("2023-01-01"),
  },
  {
    imgPath: require("../../Assets/images/eatcode.gif"),
    isBlog: false,
    title: "EatCode",
    description:
      "A free food-theme technical interview training website that provides software engineers a unique 3D UI and hundreds of data structure structure/algorithmic style questions with relatively fast solution testing.",
    ghLink: "https://github.com/eatcode-gt/eatcodeweb",
    date: new Date("2022-01-01"),

  },
  {
    imgPath: require("../../Assets/images/audur.gif"),
    isBlog: false,
    title: "Audur",
    description:
      "An Imgur clone website that allows users to securely upload audio files and anonymously share them without the need of creating an external account.",
    ghLink: "https://github.com/RiRah123/Audur",
    demoLink: "https://youtu.be/XPAxgZLrGkM",
    date: new Date("2022-01-01"),
  },
  {
    imgPath: require("../../Assets/images/ncr-go.gif"),
    isBlog: false,
    title: "NCR Go",
    description:
      "A React Native application built for NCR's Global Hackathon which provides an efficient shopping solution for customers by detecting a product's availability and in-store location (aisles) with computer vision technology.",
    ghLink: "https://github.com/RiRah123/NCR-Go",
    demoLink: "https://www.youtube.com/watch?v=eCDzSWLUD4g",
    date: new Date("2022-01-01"),
  },
  {
    imgPath: require("../../Assets/images/inventracker.gif"),
    isBlog: false,
    title: "InvenTracker",
    description:
      "A mobile application prototype built in Figma that improves the management of food-related items for food bank employers and volunteers by placing orders, notifying donors, and updating stocks effectively.",
    fgLink:
      "https://www.figma.com/file/RaRNYJhW1ycLjeEplvmy8m/InvenTracker-Prototype?node-id=0%3A1&t=YqOAAp3rYnXqhwd3-1",
    demoLink:
      "https://www.figma.com/proto/RaRNYJhW1ycLjeEplvmy8m/InvenTracker-Prototype?node-id=3%3A45&starting-point-node-id=3%3A45",
    date: new Date("2022-01-01"),
  },
  {
    imgPath: require("../../Assets/images/candy-combaters.gif"),
    isBlog: false,
    title: "Candy Combaters",
    description:
      "A two-player candy-themed game built with JavaScript and HTML Canvas, where each player controls their character using the keyboard and fights one another in a brawl to the death.",
    ghLink: "https://github.com/RiRah123/Candy-Combaters",
    demoLink: "https://rirah123.github.io/Candy-Combaters/",
    date: new Date("2022-01-01"),
  },
  {
    imgPath: require("../../Assets/images/unix-terminal-shell.gif"),
    isBlog: false,
    title: "UNIX Terminal Shell",
    description:
      "A rudimentary shell built in C that mimics the core functionality of the UNIX shell (including pipelining, IO redirection, and foreground or background processing) by prompting the user for a UNIX command and displaying the appropriate output (if any) after executing that command.",
      ghLink: "https://github.com/RiRah123/UNIX-Terminal-Shell",
      demoLink: "https://youtu.be/dlJn5VeZZUw",
      date: new Date("2021-01-01"),
    },
    {
      imgPath: require("../../Assets/images/transportation-fatality-visualisation.gif"),
      isBlog: false,
      title: "Transportation Fatality Visualisation",
      description:
        "A D3.js multi-line chart visualization, illustrating and comparing the fatality rates (per 100k) for different modes of transportation from 1975 to 2020.",
      ghLink: "https://github.com/RiRah123/Transportation-Fatality-Visualisation",
      demoLink: "https://rirah123.github.io/Transportation-Fatality-Visualisation/",
      date: new Date("2022-01-01"),
    },
    {
      imgPath: require("../../Assets/images/itunes-search-api-app.gif"),
      isBlog: false,
      title: "iTunes Search API App",
      description:
        "A JavaFX GUI application that displays a gallery of 20+ artwork images based on the results of a user-entered query from the iTunes Search API.",
      ghLink: "https://github.com/RiRah123/iTunes-Search-API-App",
      demoLink: "",
      date: new Date("2021-01-01"),
    },
    {
      imgPath: require("../../Assets/images/aframe-3d-replica.gif"),
      isBlog: false,
      title: "A-Frame 3D Replica",
      description:
        "A VR environment of Vincent Willem van Gogh's Wheatfield with Crows that was built using the A-Frame library.",
      ghLink: "https://github.com/RiRah123/Aframe-3D-Image-Replica",
      demoLink: "https://rirah123.github.io/Aframe-3D-Image-Replica/",
      date: new Date("2022-01-01"),
    },
  ];
  

function Projects() {
  const [filteredYear, setFilteredYear] = useState(null);

  const handleFilterChange = (year) => {
    setFilteredYear(year);
  };

  const filteredProjects = filteredYear
    ? projectData.filter((project) => {
        const projectYear = project.date.getFullYear() + 1;
        return projectYear === filteredYear;
      })
    : projectData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Container fluid className="project-section">
        <Container>
          <Fade left>
            <h1 className="project-heading">
              My Pieces of <strong className="purple"> Works </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few <strong className="purple"> projects </strong> I've worked on over my academic years:
            </p>
            <TimelineFilter onChange={handleFilterChange} />
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {filteredProjects.map((project, index) => (
                <Col key={index} md={4} className="project-card">
                  <ProjectCard {...project} />
                </Col>
              ))}
            </Row>
          </Fade>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Projects;
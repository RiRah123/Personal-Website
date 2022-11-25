import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I Have <strong className="purple">Coded</strong>
      </h1>
      <GitHubCalendar
        username="RiRah123"
        blockSize={15}
        blockMargin={5}
        color="#72EF36"
        fontSize={16}
      >
        <ReactTooltip html/>
      </GitHubCalendar>
    </Row>
  );
}

export default Github;

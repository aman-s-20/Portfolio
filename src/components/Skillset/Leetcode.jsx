import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          <strong className="yellow">LeetCode</strong> Stats
        </h1>
        <ReactMarkdown>
          ![LeetCode Stats](https://leetcard.jacoblin.cool/aman_singh_20?theme=dark&font=Almendra&ext=heatmap)
        </ReactMarkdown>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          <strong className="yellow">LeetCode</strong> Stats
        </h1>
        <ReactMarkdown>
          ![LeetCode Stats](https://leetcard.jacoblin.cool/aman_singh_20?theme=dark&font=Almendra&ext=contest)
        </ReactMarkdown>
      </Row>
    </>
  );
}

export default Leetcode;

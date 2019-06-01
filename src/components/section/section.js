import React from "react";

import "./section.css";

const Section = ({ node }) => {
  return (
    <div className={`section ${node.frontmatter.theme}`}>
      <main dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  );
};

export default Section;

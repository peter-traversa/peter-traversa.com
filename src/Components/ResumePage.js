import React from "react";
import '../Stylesheets/index.css';

const Resume = (props) => {
  return (
    <div className="iframe">
      <iframe scrolling="yes" title='resume' src={require('../Images/petertraversatechresume.pdf')} width="100%" height="100%"></iframe>
    </div>
  );
}

export default Resume;

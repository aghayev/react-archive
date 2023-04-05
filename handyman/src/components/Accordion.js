import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ title, url }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content"><Link to={url} >{title}</Link></div>}
    </li>
  );
};

export default Accordion;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['accordion-item'];
  if(scrolled){
    x.push('accordion-item-scrolled');
  }
  return (
    <li className={x.join(" ")}>
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && content.map(({ title, url }) => (
        <div className="accordion-content">
        <Link to={url} >{title}</Link>
        </div>
        ))}
    </li>
  );
};

export default Accordion;
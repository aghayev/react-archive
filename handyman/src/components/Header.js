import React,{ useEffect } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled,setScrolled]=React.useState(false);

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

  let x=['header'];
  if(scrolled){
    x.push('header-scrolled');
  }
  return (
    <header className={x.join(" ")}>
      <Link to="/" className="title">
        {process.env.REACT_APP_SITE_TITLE}
      </Link>
    </header>
  );
};

export default Header;

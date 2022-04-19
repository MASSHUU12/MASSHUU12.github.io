import React from "react";
import { Link } from "react-scroll";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <Link to="header" spy={true} smooth={true}>
        <span>Home</span>
      </Link>
      <Link to="about" spy={true} smooth={true}>
        <span>About</span>
      </Link>
      <Link to="contact" spy={true} smooth={true}>
        <span>Contact</span>
      </Link>
      <Link to="experience" spy={true} smooth={true}>
        <span>Experience</span>
      </Link>
      <Link to="work" spy={true} smooth={true}>
        <span>Work</span>
      </Link>
    </div>
  );
};

export default SideBar;

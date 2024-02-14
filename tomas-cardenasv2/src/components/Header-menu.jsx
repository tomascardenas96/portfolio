import React from "react";
import "./styles/Header-menu.css"

function HeaderMenu() {
  return (
    <div className="header-menu__container">
      <ul>
        <li><a href="#presentation">PRESENTATION</a></li>
        <li><a href="#about-me">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact-me">CONTACT</a></li>
      </ul>
    </div>
  );
}

export default HeaderMenu;

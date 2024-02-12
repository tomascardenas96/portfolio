import React from "react";
import "./styles/Header-menu.css"

function HeaderMenu() {
  return (
    <div className="header-menu__container">
      <ul>
        <li>PRESENTATION</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default HeaderMenu;

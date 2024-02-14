import React from "react";
import { PiBriefcaseThin } from "react-icons/pi";
import Bookmarker from "../Bookmarker";
import "../styles/pages/Projects.css";

function Projects() {
  return (
    <section className="projects-page__container">
      <div className="projects-page__content">
        <div className="projects-page__content-marker" id="projects">
          <Bookmarker icon={<PiBriefcaseThin />} name="Projects" />
        </div>
        <p>Aca van los proyectos</p>
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import Bookmarker from "../Bookmarker";
import { CiUser } from "react-icons/ci";
import "../styles/pages/AboutMe.css";

function AboutMe() {
  return (
    <section className="about-page__container">
      <div className="about-page__content">
        <div className="about-page__content-marker">
          <Bookmarker icon={<CiUser />} name="About me" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import React from "react";
import Bookmarker from "../Bookmarker";
import { CiUser } from "react-icons/ci";
import "../styles/pages/AboutMe.css";

function AboutMe() {
  return (
    <section className="about-page__container">
      <div className="about-page__content">
        <div className="about-page__content-marker" id="about-me">
          <Bookmarker icon={<CiUser />} name="About me" />
        </div>
        <p className="about-page__content-pharag">
          I am 28 years old and have a beautiful son named Mateo. I consider
          myself a respectful, organized, and collaborative person. I enjoy
          working in teams and meeting new people. My hobbies include playing
          the guitar, playing soccer, going to the gym, and reading. I love
          programming and learning new technologies; I am highly motivated to
          progress in this industry. I believe that a good day should start with
          a cup of hot coffee and a code editor.
        </p>

        <div className="about-page__content-skills__container">
          <div className="about-page__content-soft-skills">
            <h1 className="skills__title">Soft skills</h1>
            <ul>
              <li>
                <p>1-</p>Empathy
              </li>
              <li>
                <p>2-</p>assertive communication
              </li>
              <li>
                <p>3-</p>respect
              </li>
              <li>
                <p>4-</p>emotional intelligence
              </li>
              <li>
                <p>5-</p>time management
              </li>
              <li>
                <p>6-</p>self-development
              </li>
              <li>
                <p>7-</p>ability to listen
              </li>
              <li>
                <p>8-</p>patience
              </li>
            </ul>
          </div>

          <div className="about-page__content-languages">
            <h1 className="languages__title">Languages</h1>
            <ul>
              <li>
                <p>Spanish:</p>
                <span>Native</span>
              </li>
              <li>
                <p>English:</p>
                <span>Intermediate (B2)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

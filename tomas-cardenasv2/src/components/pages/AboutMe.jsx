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
        <p className="about-page__content-pharag">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id officiis esse non debitis? Ea repellat repellendus saepe libero ratione aliquam quae vero nemo! Necessitatibus animi labore rerum. Sequi, animi illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo sit excepturi facere sunt blanditiis eveniet placeat libero minima non? Nemo hic quisquam aliquid ab numquam deleniti nesciunt? Ab, iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed provident? Magnam voluptatum blanditiis suscipit accusamus excepturi. Error mollitia aut ducimus necessitatibus quasi architecto, tempore illum magni corporis facere repellat!</p>
      </div>
    </section>
  );
}

export default AboutMe;

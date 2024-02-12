import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import "./styles/Side-card.css";

function SideCard() {
  return (
      <div className="side-card__container">
        <div className="side-card__container-content">
          <div className="side-card__container-content_header">
            <h1>{"{}"}</h1>
            <p>Full stack web developer</p>
          </div>
          <div className="side-card__container-content_image">
            <img
              src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
              alt="profile-tomas-cardenas"
            />
          </div>
          <div className="side-card__container-content_info-container">
            <div className="side-card__container-content_info">
              <h1 className="info-email">Tomicardenas96@gmail.com</h1>
              <p className="info-location">Benito Juarez, Argentina</p>
              <p className="info-copyright">
                © 2023 Tomás. All Rights Reserved
              </p>
              <div className="info-icons">
                <div>
                  <div className="icon">
                    <FaTwitter />
                  </div>
                  <div className="icon">
                    <FaFacebook />
                  </div>
                  <div className="icon">
                    <FaLinkedin />
                  </div>
                  <div className="icon">
                    <FaInstagram />
                  </div>
                </div>
              </div>
              <div className="info-btn">
                <button>
                  <RxEnvelopeClosed className="info-btn-envelope" />
                  CONTACT ME!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SideCard;

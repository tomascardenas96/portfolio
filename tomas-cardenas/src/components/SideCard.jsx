import "../style/SideCard.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiEnvelopeSimpleThin } from "react-icons/pi";

function SideCard() {
  return (
    <nav className="side-card__container">
      <div className="side-card">
        <div className="side-card__content">
          <div className="side-card__content__header">
            <p>Tomás</p>
            <p>
              Full Stack Web
              <br /> Developer
            </p>
          </div>
          <div className="side-card__content__picture"></div>
          <div className="side-card__content__info">
            <p>Tomicardenas96@gmail.com</p>
            <p>Benito Juarez, Argentina</p>
            <p>© 2023 Tomás. All Rights Reserved</p>
          </div>
          <div className="side-card__content__social">
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaInstagram />
            </p>
          </div>
          <a href="#contact-page" className="side-card__content__btn">
            <button>
              <PiEnvelopeSimpleThin className="side-card__content__btn-letter" />
              CONTACT ME!
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SideCard;

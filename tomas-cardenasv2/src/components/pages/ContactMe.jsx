import React from "react";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import Bookmarker from "../Bookmarker";
import "../styles/pages/ContactMe.css";

function ContactMe() {
  return (
    <section className="contact-page__container">
      <div className="contact-page__content">
        <div className="contact-page__content-marker" id="contact-me">
          <Bookmarker icon={<PiEnvelopeSimpleThin />} name="Contact me" />
        </div>
        <form>
          <label htmlFor="">
            {" "}
            Your name
            <input type="text" />
          </label>
          <label htmlFor="">
            {" "}
            Your email
            <input type="text" />
          </label>
          <label htmlFor="">
            {" "}
            Subject
            <input type="text" />
          </label>
          <label htmlFor="">
            {" "}
            Your message
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default ContactMe;

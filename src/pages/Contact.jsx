import "../style/Contact.css";
import BookMarker from "../components/BookMarker";
import { PiEnvelopeSimpleThin } from "react-icons/pi";

function Contact() {
  return (
    <section className="contact-me__container">
      <div className="contact-me">
        <BookMarker icon={<PiEnvelopeSimpleThin />} title="Contact" />
        <form className="contact-me__form">
          <label htmlFor="name">Your name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Your email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
          <label htmlFor="message">Your message</label>
          <textarea type="text" name="message" id="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

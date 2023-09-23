import "../style/Contact.css";
import BookMarker from "../components/BookMarker";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(contact);
  }

  return (
    <section className="contact-me__container">
      <div className="contact-me">
        <BookMarker icon={<PiEnvelopeSimpleThin />} title="Contact" />
        <form className="contact-me__form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={contact.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={contact.email}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={contact.subject}
            onChange={handleChange}
          />
          <label htmlFor="message">Your message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            value={contact.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

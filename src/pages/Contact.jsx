import "../style/Contact.css";
import BookMarker from "../components/BookMarker";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [contact, setContact] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_yys7pbm",
        "template_d3yzm0l",
        form.current,
        "bMj25TZhs6-FtTR7u"
      )
      .then(
        (result) => {
          setLoading(false);
          Swal.fire("Your message", "has been sent!", "success");
          setContact({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Your message cannot be",
            text: "sent, please try again!",
          });
        }
      );
  };

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  return (
    <section className="contact-me__container" id="contact-page">
      <div className="contact-me">
        <BookMarker icon={<PiEnvelopeSimpleThin />} title="Contact" />
        <form ref={form} className="contact-me__form" onSubmit={sendEmail}>
          <label htmlFor="user_name">Your name</label>
          <input
            type="text"
            name="user_name"
            value={contact.user_name}
            onChange={handleChange}
          />
          <label htmlFor="user_email">Your email</label>
          <input
            type="email"
            name="user_email"
            value={contact.user_email}
            onChange={handleChange}
          />
          <label htmlFor="user_subject">Subject</label>
          <input
            type="text"
            name="user_subject"
            value={contact.user_subject}
            onChange={handleChange}
          />
          <label htmlFor="message">Your message</label>
          <textarea
            type="text"
            name="message"
            value={contact.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          {loading ? <span className="loader"></span> : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;

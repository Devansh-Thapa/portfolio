import React from "react";
import "./Contact.css";
import contactVector from "./../../assets/contact_anime.png";
import Header from "./../Header/Header";
import FooterLink from "./../FooterLink/FooterLink";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";
import medium from "./../../assets/me.png";
import web from "./../../assets/web.png";

const Contact = () => {
  return (
    <div className="section-container">
      <Header heading="Get in touch" details="Feel free to drop me an email" />

      {/* From section */}
      <div className="contact-form-container">
        <form
          action="https://formspree.io/f/meqvkyle"
          method="POST"
          className="contact-form"
        >
          {/* Email input */}
          <input
            type="email"
            placeholder="Your Email ID"
            name="_replyto"
            className="input-box email-input"
          />
          {/* Email body */}
          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="input-box body-input"
          ></textarea>
          {/* Submit Button */}
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>
      {/* Socail icons */}
      <div className="social-icon-container">
        <a href="#" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a href="#" className="social-icon">
          <img src={linkedin} alt="social" />
        </a>
        <a href="#" className="social-icon">
          <img src={instagram} alt="social" />
        </a>
        <a href="#" className="social-icon">
          <img src={medium} alt="social" />
        </a>
        <a href="#" className="social-icon">
          <img src={web} alt="social" />
        </a>
      </div>
      <FooterLink phrase="Read more " link="about me" toAddress="/about" />

      <div className="vector-frame">
        <img
          src={contactVector}
          alt="conctact-vector"
          className="contact-vector"
        />
      </div>
    </div>
  );
};

export default Contact;

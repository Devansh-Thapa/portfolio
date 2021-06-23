import React from "react";
import "./About.css";
import Header from "./../Header/Header";
import aboutVector from "./../../assets/about_vector.png";
import FooterLink from "./../FooterLink/FooterLink";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About me"
        details="The Lean Programmer | Public speaker | YouTuber | Blogger"
      />
      <div className="about-main">
        <div className="about-main-left">
          {/* Subsection 1 */}
          <h3 className="about-sub-head">Comptetive Coder</h3>
          <p className="about-details">
            Details
            <a className="about-link-element" href="#">
              link
            </a>
          </p>

          {/* Subsection 1 */}
          <h3 className="about-sub-head">Comptetive Coder</h3>
          <p className="about-details">
            Details
            <a className="about-link-element" href="#">
              link
            </a>
          </p>

          {/* Subsection 1 */}
          <h3 className="about-sub-head">Comptetive Coder</h3>
          <p className="about-details">
            Details
            <a
              className="about-link-element"
              href="mailto:devanshthapa0307@gmail.com"
            >
              link
            </a>
          </p>
        </div>
        <div className="about-main-right">
          <img src={aboutAnime} alt="about-anime" className="about-anime" />
        </div>
      </div>

      <FooterLink
        phrase="Check out my "
        link="projects"
        toAddress="/projects"
      />
      {/* Vector Frame */}
      <div className="vector-frame">
        <img src={aboutVector} alt="about" className="about-vector" />
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import "../styles/About.css";
import profilePicture from "../images/Profile-Picture.jpg";
import Skills from '../Skills.js'

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="lhs">
        <h1 className="title">Erick Contreras</h1>
        <h2 className="subtitle">Full Stack Developer</h2>
        <div className="cosmeticSubtitle"></div>
        <p className="introduction">
          Mechatronics Engineer, currently enrolled in a fullstack development course. I enjoy building web applications and to collaborate with people from all around the world!
        </p>

      </div>
      <div className="mid"><img src={profilePicture} width="100%" height="100%" alt="Profile"/></div>
      <div className="rhs">
        <div className="rhsTitle">Languages</div>
        <Skills />
      </div>

      <div className="projectsIntro">Take a look at my recent projects!</div>
    </div>
  );
}

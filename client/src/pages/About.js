import React from "react";
import SkillList from "../components/SkillList/SkillList";
import TechnologyList from "../components/TechnologyList/TechnologyList";
import profilePicture from "../assets/Profile-Picture.jpg";
import { GrTechnology } from "react-icons/gr";
import "./About.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="lhs">
        <h1 className="title">Erick Contreras</h1>
        <h2 className="subtitle">Full Stack Developer</h2>
        <div className="cosmeticSubtitle"></div>
        <p className="introduction">
          Mechatronics Engineer, currently enrolled in a fullstack development
          course. I enjoy building web applications and to collaborate with
          people from all around the world!
        </p>
      </div>
      <div className="mid">
        <img src={profilePicture} className="profileImage" alt="Profile" />
      </div>
      <div className="rhs">
        <div className="rhsTitle">Languages</div>
        <SkillList />
      </div>
      <div className="projectsIntro">
        Technologies <GrTechnology />
      </div>
      <TechnologyList />
    </div>
  );
}

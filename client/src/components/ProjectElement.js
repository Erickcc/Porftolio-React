import React from "react";
import './styles/Portfolio.css'
import { AiFillGithub } from 'react-icons/ai';

function ProjectElement({name, url, img}) {
  return (
      <div className="projectContainer">
        <div className="projectImageContainer">
          <img src={img} alt={name} className="projectImage"></img>
          <div className="projectTitle">{name} <a href={url} className="projectHyperlink"><AiFillGithub /></a></div>
                    
        </div>
      </div>
  );
}

export default ProjectElement;
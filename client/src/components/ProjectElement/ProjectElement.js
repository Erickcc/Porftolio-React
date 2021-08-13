import React from "react";
import "./ProjectElement.css";
import { AiFillGithub } from "react-icons/ai";

// Display each project, each project has an image, when hovering over the image the user can click on the project
// title to go to the url where the project is running or if they click on the github logo they will be moved to
// the github repo. If the project has no live url, then the title is plain text
function ProjectElement({ name, live, url, img }) {
  return (
    <div className="projectContainer">
      <div className="projectImageContainer">
        <img src={img} alt={name} className="projectImage"></img>
        {live.length === 0 ? (
          <div className="projectTitle">{name} </div>
        ) : (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="projectTitle"
          >
            {name}
          </a>
        )}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="projectHyperlink"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default ProjectElement;

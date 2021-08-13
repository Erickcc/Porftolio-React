import React from "react";
import "./styles/Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
// https://www.codegrepper.com/code-examples/javascript/how+to+load+the+images+from+the+website+dynamically+in+react
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

import React from "react";
import TechnologyElement from "../TechnologyElement/TechnologyElement";
import "./TechnologyList.css"
// node.js, mysql, jest, express, MongoDB, PWA, React, JWT
function TechnologyList() {
  const technologies = [
    {
      name: "Node.js",
      id: 1,
    },
    {
      name: "Express",
      id: 2,
    },
    {
      name: "React",
      id: 3,
    },
    {
      name: "Jest",
      id: 4,
    },
    {
      name: "JWT",
      id: 5,
    },
    {
      name: "GraphQL",
      id: 6,
    },
    {
      name: "MySQL",
      id: 7,
    },
    {
      name: "MongoDB",
      id: 8,
    },
  ];

  return (
    <div className="technologyContainer">
      {technologies.map((skill) => (
        <TechnologyElement name={skill.name} key={skill.id} />
      ))}
    </div>
  );
}

export default TechnologyList;

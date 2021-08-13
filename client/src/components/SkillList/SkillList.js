import React from "react";
import SkillElement from "../SkillElement/SkillElement";

// Map over the skills array to display all the skills
function SkillList() {
  const skills = [
    {
      name: "HTML",
      percentage: 60,
      id: 1
    },
    {
      name: "CSS",
      percentage: 40,
      id: 2
    },
    {
      name: "Javascript",
      percentage: 60,
      id: 3
    },
    {
      name: "C",
      percentage: 50,
      id: 4
    },
    {
      name: "Java",
      percentage: 20,
      id: 5
    },
  ];

  return (
    <div>
      {skills.map((skill) => (
        <SkillElement
          name={skill.name}
          percentage={skill.percentage}
          key={skill.id}
        />
      ))}
    </div>
  );
}

export default SkillList;

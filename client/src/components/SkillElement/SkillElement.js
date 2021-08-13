import React from "react";
import "./SkillElement.css";

// Displays a skill, the % in number and we use 2 divs that behave as 2 squares one inside the other one
// to simulate simulate a progress bar
function SkillElement({ name, percentage }) {
  const styles = {
    innerSquareSize: {
      width: percentage + "%",
    },
  };

  return (
    <div className="skillTitle">
      {name}
      <span className="barPercentage">({`${percentage}%`})</span>
      <div className="outerSquare">
        <div className="innerSquare" style={styles.innerSquareSize}></div>
      </div>
    </div>
  );
}

export default SkillElement;

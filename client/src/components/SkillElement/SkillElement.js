import React from "react";
import "./SkillElement.css";

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

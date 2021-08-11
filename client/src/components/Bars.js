import React from "react";
import "./styles/Bars.css";

function Bars({ name, percentage }) {
  const styles = {
    innerSquareSize: {
      width: percentage + "%",
    },
  };

  return (
    <div className="barTitle">
      {name}
      <span className="barPercentage">({`${percentage}%`})</span>
      <div className="outerSquare">
        <div className="innerSquare" style={styles.innerSquareSize}></div>
      </div>
    </div>
  );
}

export default Bars;

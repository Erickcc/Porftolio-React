import React from "react";
import "./styles/Technologies.css"
import { BsFillPlusSquareFill } from 'react-icons/bs';
// node.js, mysql, jest, express, MongoDB, PWA, React, JWT

function TechnologiesDisplay({name}) {


  return (
    <div className="techOuterSquare">
        <div className="techInnerSquare"><span className="techIcon"><BsFillPlusSquareFill /></span> {name}</div>
    </div>
  );
}

export default TechnologiesDisplay;
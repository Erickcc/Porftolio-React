import React from "react";
import "./TechnologyElement.css"
import { BsFillPlusSquareFill } from 'react-icons/bs';

// Container that has text inside it as well as an icon that displays a technology
function TechnologyElement({name}) {


  return (
    <div className="techOuterSquare">
        <div className="techInnerSquare"><span className="techIcon"><BsFillPlusSquareFill /></span> {name}</div>
    </div>
  );
}

export default TechnologyElement;
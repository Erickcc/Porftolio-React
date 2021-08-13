import React from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import "./Portfolio.css";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function Portfolio() {
  return (
    <div>
      <div className="portfolioTitle">
        Projects{" "}
        <span>
          <AiOutlineFundProjectionScreen />{" "}
        </span>
      </div>
      <ProjectList />
    </div>
  );
}

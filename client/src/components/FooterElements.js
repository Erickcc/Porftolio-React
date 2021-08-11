import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/Footer.css';

function FooterElements({ url, icon }) {
  return (
    <li className="li">
      <a className="a" href={`${url}`} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
}

export default FooterElements;

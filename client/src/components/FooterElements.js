import React from "react";
import './styles/Footer.css';

function FooterElements({ url, Icon }) {
  return (
    <li className="liFooter">
      <a className="aFooter" href={`${url}`} target="_blank" rel="noreferrer">
        <Icon />
      </a>
    </li>
  );
}

export default FooterElements;

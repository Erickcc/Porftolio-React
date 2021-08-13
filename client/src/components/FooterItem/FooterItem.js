import React from "react";
import './FooterItem.css';

function FooterItem({ url, Icon }) {
  return (
    <li className="liFooter">
      <a className="aFooter" href={`${url}`} target="_blank" rel="noreferrer">
        <Icon />
      </a>
    </li>
  );
}

export default FooterItem;

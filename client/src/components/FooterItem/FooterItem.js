import React from "react";
import './FooterItem.css';

// Display each list item as a hyperlink as its corresponding icon from react icons
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

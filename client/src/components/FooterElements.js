import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterElements({ url, icon }) {
  const styles = {
    li: {
      display: "inline",
      listStyleType: "none",
      fontSize: 50,
      paddingRight: 20,
      paddingLeft: 20,
      
    },
    icon: {
        color: "#152235",
    }
  };

  return (
    <li className="nav-item" style={styles.li}>
      <a style={styles.icon}
        href={`${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
}

export default FooterElements;

import React from "react";
import "./HeaderItem.css";

// Displays each hyperlink as a list item. If the item is "Resume" then it doesnt call the handlePage function
// Instead, it just sends to an outer link from google drive that contains the pdf file for the cv
function HeaderItem({ name, currentPage, handlePageChange }) {
  const styles = {
    active: {
      color: "black",
      fontSize: 20,
      backgroundColor: "Gainsboro",
      borderRadius: "5px",
      textAlign: "center",
    },
    inactive: {
      color: "white",
      fontSize: 20,
      borderRadius: "5px",
      textAlign: "center",
    },
  };

  return (
    <li className="liHeader">
      {name === "Resume" ? (
        <a
          style={currentPage === `${name}` ? styles.active : styles.inactive}
          href="https://drive.google.com/file/d/1XEMiw4pSfOc9n8f6l4Lzx1z2_H4JFITm/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hyperlinkHeader"
        >
          {name}
        </a>
      ) : (
        <a
          style={currentPage === `${name}` ? styles.active : styles.inactive}
          href={`#${name}`}
          onClick={() => {
            handlePageChange(name);
          }}
          className="hyperlinkHeader"
        >
          {name}
        </a>
      )}
    </li>
  );
}

export default HeaderItem;

import React from "react";
import "./styles/Header.css";

function Navigation({ name, currentPage, handlePageChange }) {
  // const [currentFontColor, setCurrentFontColor] = useState("white");

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
    bg: {
      width: "10%",
    },
  };

  return (
    <li className="liHeader" style={styles.bg}>
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

export default Navigation;

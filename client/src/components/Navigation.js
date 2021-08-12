import React from "react";
import "./styles/Header.css";

function Navigation({ name, currentPage, handlePageChange }) {
  // const [currentFontColor, setCurrentFontColor] = useState("white");

  const styles = {
    active: {
      color: "black",
      fontSize: 20,
      backgroundColor: 'Gainsboro',
      borderRadius: "5px",
      textAlign: "center"
    },
    inactive:{
      color: "white",
      fontSize: 20,
      borderRadius: "5px",
      textAlign: "center"
    },
    bg: {
      width: "10%", 
    }
  };

  return (
    <li className="liHeader" style={styles.bg}>
      <a
        style={currentPage === `${name}` ? styles.active: styles.inactive}
        href={`#${name}`}
        onClick={() => {handlePageChange(name)}}
        className="hyperlinkHeader"
      >
        {name}
      </a>
    </li>
  );
}

export default Navigation;

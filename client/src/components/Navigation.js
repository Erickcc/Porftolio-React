import React from "react";

function Navigation({ name, currentPage, handlePageChange }) {
  // const [currentFontColor, setCurrentFontColor] = useState("white");

  const styles = {
    active: {
      color: "black",
      fontSize: 20,
      backgroundColor: 'Gainsboro',
    },
    inactive:{
      color: "white",
      fontSize: 20,
    }
  };

  return (
    <li className="nav-item" style={styles.bg}>
      <a
        style={currentPage === `${name}` ? styles.active: styles.inactive}
        href={`#${name}`}
        onClick={() => {handlePageChange(name)}}
        className={currentPage === `${name}` ? "nav-link active" : "nav-link"}
      >
        {name}
      </a>
    </li>
  );
}

export default Navigation;

import React from "react";
import HeaderItem from "../HeaderItem/HeaderItem.js";
import "./Header.css";

// Sets the layout for the header container and maps over headerSection to display all the elements in the header
function Header({ currentPage, handlePageChange }) {
  const headerSections = [
    {
      name: "About",
      id: 1,
    },
    {
      name: "Portfolio",
      id: 2,
    },
    {
      name: "Contact",
      id: 3,
    },
    {
      name: "Resume",
      id: 4,
    },
  ];

  return (
    <header className="header">
      <ul className="ulHeader">
        {headerSections.map((headerSection) => (
          <HeaderItem
            name={headerSection.name}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            key={headerSection.id}
          />
        ))}
      </ul>
    </header>
  );
}

export default Header;

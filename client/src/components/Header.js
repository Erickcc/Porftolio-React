import React from "react";
import Navigation from "./Navigation";
import "./styles/Header.css";

function Header({ currentPage, handlePageChange }) {
  const navSections = [
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
      <ul className="ul">
        {navSections.map((navSection) => (
          <Navigation
            name={navSection.name}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            key={navSection.id}
          />
        ))}
      </ul>
    </header>
  );
}

export default Header;

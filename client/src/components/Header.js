import React from "react";
import Navigation from "./Navigation";
import './styles/Header.css';

const styles = {
  navStyle: {
    flex: 1,
    justifyContent: "space-evenly",
  },
};

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
      <ul className="nav nav-tabs">
        <div className="container-fluid nav-bar-custom">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav" style={styles.navStyle}>
                {navSections.map((navSection) => (
                  <Navigation
                    name={navSection.name}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                    key={navSection.id}
                  />
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </ul>
    </header>
  );
}

export default Header;

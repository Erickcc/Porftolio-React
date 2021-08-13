import React, { useState } from "react";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";
import Header from "../Header/Header";
// import Resume from "./pages/Resume";
import Footer from "../Footer/Footer";
import "./PortfolioLogistic.css";

export default function PortfolioLogistic() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainFormat">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

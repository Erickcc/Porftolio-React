import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import "./styles/Root.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }else if (currentPage === "Portfolio"){
      return <Portfolio />;
    }else if (currentPage === "Contact"){
      return <Contact />;
    }else if (currentPage === "Resume"){
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainFormat">
      {/* Style that forces the footer to stay at the very bottom */}

        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}

      <Footer />
    </div>
  );
}

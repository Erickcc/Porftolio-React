import React from "react";
import FooterElements from "./FooterElements";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles/Footer.css"

function Footer() {
  const footerSection = [
    {
      url: "https://github.com/Erickcc",
      icon: faGithub,
      id: 1,
    },
    {
      url: "https://www.linkedin.com/in/erickgcc/",
      icon: faLinkedin,
      id: 2,
    },
  ];

  return (
    <footer className="bottomContainer">
      <ul className="ul">
        {footerSection.map((footerElement) => (
          <FooterElements
            url={footerElement.url}
            icon={footerElement.icon}
            key={footerElement.id}
          />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

import React from "react";
import FooterItem from "../FooterItem/FooterItem.js";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import "./Footer.css"

// Sets the main container for the footer and maps over footerSection to display all our icons in the footer
function Footer() {
  const footerSection = [
    {
      url: "https://github.com/Erickcc",
      Icon: AiFillGithub,
      id: 1,
    },
    {
      url: "https://www.linkedin.com/in/erickgcc/",
      Icon: AiFillLinkedin,
      id: 2,
    },
    {
      url: "mailto:erickcc06@gmail.com",
      Icon: SiGmail,
      id: 3,
    }
  ];

  return (
    <footer className="bottomContainer">
      <ul className="ulFooter">
        {footerSection.map((footerElement) => (
          <FooterItem
            url={footerElement.url}
            Icon={footerElement.Icon}
            key={footerElement.id}
          />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

import React from "react";
import FooterElements from "./FooterElements";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';


import "./styles/Footer.css"

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
          <FooterElements
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

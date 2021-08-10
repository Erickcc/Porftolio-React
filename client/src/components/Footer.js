import React from "react";
import FooterElements from "./FooterElements";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const styles = {
    ul: {
      textAlign: "center",
    },
    bottomContainer: {
      width: '100%',
      height: 70,
      // backgroundColor: '#EE5407',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick
    },
  };

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
    <footer style={styles.bottomContainer}>
      <ul style={styles.ul}>
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

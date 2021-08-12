import React from "react";
import ProjectElement from "./ProjectElement.js";
import './styles/Portfolio.css';
import techBlog from './images/tech-blog2.jpg';
import workOut from './images/fitness-tracker2.jpg';
import weatherDashboard from './images/weather-dashboard2.jpg';
import tuTiendita from './images/tu-tiendita2.jpg';
import employeeTracker from './images/employee-tracker2.jpg';
import cryptoInvestor from './images/crypto-web2.jpg'

function Projects() {
  const projects = [
    {
      name: "Tech Blog",
      url: "https://github.com/Erickcc/Tech-Blog",
      live: "https://hidden-atoll-95475.herokuapp.com/",
      img: techBlog,
      id: 1,
    },
    {
      name: "Workout Tracker",
      url: "https://github.com/Erickcc/Workout-Tracker",
      live: "https://calm-lowlands-62937.herokuapp.com/",
      img: workOut,
      id: 2,
    },
    {
      name: "Weather Dashboard",
      url: "https://github.com/Erickcc/Weather-Dashboard",
      live: "https://erickcc.github.io/Weather-Dashboard/",
      img: weatherDashboard,
      id: 3,
    },
    {
      name: "Tu Tiendita",
      url: "https://github.com/alarista/tutiendita",
      live: "https://desolate-shore-00305.herokuapp.com/",
      img: tuTiendita,
      id: 4,
    },
    {
      name: "Employee Tracker",
      url: "https://github.com/Erickcc/Employee-Tracker",
      live: "",
      img: employeeTracker,
      id: 5,
    },
    {
      name: "Crypto Investor",
      url: "https://github.com/Erickcc/Project1-Crypto-Investor",
      live: "https://erickcc.github.io/Project1-Crypto-Investor/",
      img: cryptoInvestor,
      id: 6,
    },
  ];

  return (
    <div className="portfolioContainer">
      {projects.map((project) => (
        <ProjectElement
          name={project.name}
          url={project.url}
          live={project.live}
          img={project.img}
          key={project.id}
        />
      ))}
    </div>
  );
}

export default Projects;

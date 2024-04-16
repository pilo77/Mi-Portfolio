import React from "react";
import proyect from "../assets/img/proyect.png";
import Projects from "../components/Projects.js";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="pb-5" data-aos="fade-up" data-aos-duration="1500">
          <h1>My portfolio</h1>
        </div>
        <div className="container-fluid">
          <div className="row projects">
            <Projects
              img={proyect}
              name="aca subire mis proyectos"
              description="Web application: React, node.js, javascript, css"
              linkWebsite="#"
              linkGithub="https://github.com/pilo77?tab=repositories"
            ></Projects>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

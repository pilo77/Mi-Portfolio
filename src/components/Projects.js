import React from "react";
import "../css/Projects.css";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const Projects = (props) => {
  const { img, name, description, linkWebsite, linkGithub } = props;

  return (
    <div
      className="col-12 col-lg-4 col-md-6 mt-2"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <img className="img-fluid" alt="" src={img}></img>
      <div className="container-fluid hover">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="row d-flex justify-content-center">
          <a
            className="col-5 btn me-1 d-flex justify-content-center align-items-center"
            href={linkWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobeAmericas /> <div className="website">Website</div>
          </a>
          <a
            className="col-6 btn ms-1 d-flex justify-content-center align-items-center"
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <div className="repository">Repository</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
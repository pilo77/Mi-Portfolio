import React from "react";
import "../css/Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";



const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 py-3">
          <div className="d-flex justify-content-center social-icon">
            <a
              href="mailto:carlosandresvilla123carlos@gmail.com"
              alt="Mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <AiOutlineMail></AiOutlineMail>
              </span>
            </a>
            <a
              href="https://github.com/pilo77"
              alt="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <BsGithub></BsGithub>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/cavillamil/"
              alt="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <BsLinkedin></BsLinkedin>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center text-white pb-2">
        <p className="copyright">
          &copy; {year} Carlos Andres Villamil. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
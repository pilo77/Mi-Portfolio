import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/NavBar.css";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleVisible = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <div className="navbar-logo">
          <Nav.Link href="#home" className="logo">
           Villamil
          </Nav.Link>
        </div>
        <div className="d-flex">
          <button
            className="menu d-lg-none"
            type="button"
            onClick={handleVisible}
          >
            <FaBars className="mb-3 pb-1" />
          </button>
        </div>
        <ul
          className={
            visible
              ? "navbar-nav visible align-items-center"
              : "navbar-nav align-items-center"
          }
          onMouseUp={handleVisible}
        >
          <Nav.Link
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={
              activeLink === "about" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("skills")}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            className={
              activeLink === "portfolio" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("portfolio")}
          >
            Portfolio
          </Nav.Link>
          <span className="navbar-text">
            <div className="d-flex social-icon">
              <a
                href="mailto:Mignize@gmail.com"
                alt="Mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <AiOutlineMail></AiOutlineMail>
                </span>
              </a>
              <a
                href="https://www.github.com/Mignize"
                alt="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BsGithub></BsGithub>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-salazar-g/"
                alt="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BsLinkedin></BsLinkedin>
                </span>
              </a>
            </div>
            <a href="#contact" className="contact-btn">
              <button className="connect">
                <span>Let’s Connect</span>
              </button>
            </a>
          </span>
        </ul>
      </Navbar>
    </Router>
  );
};

export default NavBar;

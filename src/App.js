import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import Skills  from "./components/Skills";
import Portfolio from "./components/Portfolio";

import Contact  from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
    
      <NavBar />
      <section id="home">
        <Home />
      </section>
     
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;




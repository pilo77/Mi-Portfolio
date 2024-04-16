import React from "react";
import "../css/Home.css";
import profile from "../assets/img/header-img.png";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <div
        className="row text-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="col-lg-4 pb-4 pe-4">
          <img className="profile img-fluid" src={profile} alt=""></img>
        </div>
        <div className="col-lg-8">
          <span className="description-home typing-hello">
            <p>Hi!</p>
          </span>
          <h1 className="presentation typing-name">
            <p>I'm  Carlos Villamil  </p>
          </h1>
          <span className="description-home typing">
            <p>Full stack developer</p>
          </span>
        </div>
      </div>
    </>
  );
};


export default Home;

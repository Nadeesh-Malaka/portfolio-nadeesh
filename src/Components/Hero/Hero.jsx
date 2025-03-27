import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Hi, I'm Nadeesh Malaka,</span> Full Stack Developer based in Sri
        Lanka
      </h1>
      <p>
        I love coding, solving problems, and learning new technologies every
        day.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;

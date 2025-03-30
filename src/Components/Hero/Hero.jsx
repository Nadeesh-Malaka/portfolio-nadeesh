import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
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
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink> </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;

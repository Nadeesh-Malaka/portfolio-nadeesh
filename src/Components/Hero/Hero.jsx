import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import cv_file from  "../../assets/Nadeesh Malaka .pdf"; // Import the CV file

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Image" />
      <h1>
        <span>Hi, I'm Nadeesh Malaka,</span> Full Stack Developer based in Sri
        Lanka
      </h1>
      <p>
        I love coding, solving problems, and learning new technologies every
        day.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a href={cv_file} download="Nadeesh_Malaka_CV.pdf" className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
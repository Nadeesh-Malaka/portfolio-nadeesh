import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import cv_file from "../../assets/Nadeesh_Malaka_CV.pdf";

const Hero = () => {
  const roles = [
    "Backend Developer",
    "Front-End Developer",
    "Content Creator",
    "Full Stack Developer",
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <div id="home" className="hero">
      <img
        src={profile_img}
        alt="Nadeesh Malaka Profile"
        className="profile-img"
      />
      <h1>
        <span>Hi, I'm Nadeesh Malaka,</span> <br /> {currentRole}
      </h1>
      <p>
        I specialize in building robust backend systems, crafting seamless user
        experiences, creating engaging content, and ensuring quality through
        testing, all while exploring new technologies to deliver impactful
        solutions.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Let's Connect
          </AnchorLink>
        </div>
        <a
          href={cv_file}
          download="Nadeesh_Malaka_CV.pdf"
          className="hero-resume"
          aria-label="Download Nadeesh Malaka's CV"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
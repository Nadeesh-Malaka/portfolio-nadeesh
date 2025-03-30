import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import cv_file from "../../assets/Nadeesh_Malaka_CV.pdf"; // Fixed the file path (removed space)

const Hero = () => {
  // List of roles to cycle through
  const roles = [
    "Backend Developer",
    "Front-End Developer",
    "Content Creator", 
    "Full Stack Developer",
  ];

  // State to track the current role
  const [currentRole, setCurrentRole] = useState(roles[0]);

  // UseEffect to cycle through roles every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length; // Loop back to the first role
        return roles[nextIndex];
      });
    }, 1500); // Change every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [roles]);

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Nadeesh Malaka" />
      <h1>
        <span>Hi, I'm Nadeesh Malaka,</span> <br />  {currentRole} 
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
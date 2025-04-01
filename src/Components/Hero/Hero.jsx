import React, { useState, useEffect, useRef } from "react";
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

  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const heroRef = useRef(null); // Ref to the Hero section

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set isVisible based on whether the section is in view
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div id="home" className="hero" ref={heroRef}>
      <img
        src={profile_img}
        alt="Nadeesh Malaka Profile"
        className={`profile-img ${isVisible ? "fade-in" : ""}`}
      />
      <h1 className={isVisible ? "fade-in" : ""}>
        <span className="gradient-text">Hi, I'm Nadeesh Malaka,</span> <br />
        <span className="role-container">
          {roles.map((role, index) => (
            <span
              key={index}
              className="role-text"
              style={{ "--i": roles.length - index }}
              data-text={role}
            >
              {role}
            </span>
          ))}
        </span>
      </h1>
      <p className={isVisible ? "fade-in" : ""}>
        I specialize in building robust backend systems, crafting seamless user
        experiences, creating engaging content, and ensuring quality through
        testing, all while exploring new technologies to deliver impactful
        solutions.
      </p>
      <div className={`hero-actions ${isVisible ? "fade-in" : ""}`}>
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
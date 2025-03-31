import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo (1).svg";
import user_icon from "../../assets/user_icon.svg";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="logo-img" src={footer_logo} alt="Nadeesh Malaka" />
          <p>
            {" "}
            I'm a passionate Software Developer specializing in web development. I love building innovative digital
            solutions!
          </p>
        </div>
        <div className="footer-top-right">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/Nadeesh-Malaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nadeeshmalaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@NadeeshCreation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {new Date().getFullYear()} Nadeesh Malaka | All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>
            <a
              href="https://www.linkedin.com/in/nadeeshmalaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with Me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

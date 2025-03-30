import React from 'react';
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt='Pattern' />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt='Profile' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m Nadeesh Malaka, a passionate Full Stack Developer from Sri Lanka. I love building web applications and solving real-world problems with technology.</p>
            <p>With experience in modern web development, I specialize in creating interactive and scalable applications using MERN stack, Laravel, and cloud technologies.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML, CSS & JS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>React & Vue.js</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Node.js & Express</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>MongoDB & MySQL</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Laravel & PHP</p><hr style={{ width: "80%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Years of Web Development</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Project complete</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>100</h1>
            <p>Hours of Coding Experience</p>
        </div>
        <hr />

      </div>
    </div>
  );
}

export default About;

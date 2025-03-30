import React, { useState } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about-skills");

  // Education data
  const education = {
    university: {
      name: "UVA Wellassa University",
      degree: "Bachelor of Information and Communication Technology (Hons)",
      graduation: "Expected Graduation: 2026",
      gpa: "GPA: 3.9",
    },
    school: {
      name: "Piliyandala Central College",
      level: "G.C.E. Advanced Level (2020)",
      results: [
        "ICT: B",
        "Engineering Technology: C",
        "Science for Technology: C",
        "General English: C",
        "Z-Score: 1.5294",
      ],
    },
  };

  // Certificates data
  const certificates = [
    "↪ Web Design for Beginners – University of Moratuwa (2024)",
    "↪ Programming in Python – University of Moratuwa (2024)",
    "↪ HP LIFE Data Science & Analytics (2024)",
    "↪ Introduction to Cybersecurity – Cisco Networking Academy (2021)",
    "↪ Introduction to Selenium Certification – Simplilearn (2024)",
    "↪ GIT for Beginners – KodeKloud (2025)",
    "↪ Participant, UvaXtreme 1.1 Hackathon – IEEE Club, Uva Wellassa University (2025)",
  ];

  // Working experience data
  const experience = [
    "▶ Antler Industries Pvt Ltd | Sales Associate | Dec 2021 – Jul 2022",
    "▶ Global System Solutions International (Pvt) Ltd | Data Entry Assistant | Aug 2021 – Nov 2021",
  ];

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-tabs">
            <button
              className={activeTab === "about-skills" ? "active" : ""}
              onClick={() => setActiveTab("about-skills")}
            >
              About-Skills
            </button>
            <button
              className={activeTab === "education" ? "active" : ""}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={activeTab === "certificates" ? "active" : ""}
              onClick={() => setActiveTab("certificates")}
            >
              Certificates
            </button>
            <button
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => setActiveTab("experience")}
            >
              Working Experience
            </button>
          </div>
          <div className="about-content">
            {activeTab === "about-skills" && (
              <div className="about-para">
                <p>
                  I’m Nadeesh Malaka, a passionate Full Stack Developer from Sri
                  Lanka. I love building web applications and solving real-world
                  problems with technology.
                </p>
                <p>
                  With experience in modern web development, I specialize in
                  creating interactive and scalable applications using MERN
                  stack, Laravel, and cloud technologies.
                </p>
                <div className="about-skills">
                  <div className="about-skill">
                    <p>HTML, CSS & JS</p>
                    <hr style={{ width: "60%" }} />
                  </div>
                  <div className="about-skill">
                    <p>React & Vue.js</p>
                    <hr style={{ width: "65%" }} />
                  </div>
                  <div className="about-skill">
                    <p>Node.js & Express</p>
                    <hr style={{ width: "60%" }} />
                  </div>
                  <div className="about-skill">
                    <p>MongoDB & MySQL</p>
                    <hr style={{ width: "65%" }} />
                  </div>
                  <div className="about-skill">
                    <p>Laravel & PHP</p>
                    <hr style={{ width: "80%" }} />
                  </div>
                </div>
              </div>
            )}
            {activeTab === "education" && (
              <div className="about-para">
                <h2>Education</h2>
                <div className="education-section">
                  <div className="education-item">
                    <strong>{education.university.name}</strong>
                    <br />
                    {education.university.degree}
                    <br />
                    {education.university.graduation}
                    <br />
                    {education.university.gpa}
                  </div>
                   
                  <div className="education-item">
                    <strong>{education.school.name}</strong>
                    <br />
                    {education.school.level}
                    <br /><br />
                    <p><strong>Results:</strong><br /></p>
                    {education.school.results.map((result, index) => (
                      <span key={index}>
                        {result}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "certificates" && (
              <div className="about-para">
                <h2>Certificates</h2>
                {certificates.map((cert, index) => (
                  <p key={index}>{cert}</p>
                ))}
              </div>
            )}
            {activeTab === "experience" && (
              <div className="about-para">
                <h2>Working Experience</h2>
                {experience.map((exp, index) => (
                  <p key={index}>{exp}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
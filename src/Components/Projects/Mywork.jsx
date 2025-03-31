import React, { useState, useEffect, useRef } from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import external_link_icon from "../../assets/external_link_icon.svg";

const Mywork = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 projects initially
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const myworkRef = useRef(null); // Ref to the Mywork section

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

    if (myworkRef.current) {
      observer.observe(myworkRef.current);
    }

    return () => {
      if (myworkRef.current) {
        observer.unobserve(myworkRef.current);
      }
    };
  }, []);

  const handleShowMore = () => {
    setVisibleCount(mywork_data.length); // Show all projects
  };

  return (
    <div id="work" className="mywork" ref={myworkRef}>
      <div className={`mywork-title ${isVisible ? "fade-in" : ""}`}>
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className={`mywork-container ${isVisible ? "fade-in" : ""}`}>
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <div key={index} className="mywork-item">
            <img src={work.w_img} alt={work.w_name} />
            <div className="mywork-overlay">
              <p>{work.w_desc}</p>
              <a
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${work.w_name} on GitHub`}
              >
                <img src={external_link_icon} alt="View Project" />
              </a>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < mywork_data.length && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>Show more</p>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      )}
    </div>
  );
};

export default Mywork;
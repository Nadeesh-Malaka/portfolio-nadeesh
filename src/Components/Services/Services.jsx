import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  const [flipped, setFlipped] = useState(Array(services_data.length).fill(false));
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const servicesRef = useRef(null); // Ref to the Services section

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="services" id="services" ref={servicesRef}>
      <div className={`services-title ${isVisible ? "fade-in" : ""}`}>
        <h1>My Services</h1>
        <img src={theme_pattern} className="" alt="Pattern" />
      </div>
      <div className={`services-container ${isVisible ? "fade-in" : ""}`}>
        {services_data.map((service, index) => (
          <div
            key={index}
            className={`services-card ${flipped[index] ? "flipped" : ""}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-front">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
            <div className="card-back">
              <h2>{service.s_name}</h2>
              <p>{service.details}</p>
              <div className="services-readmore">
                <p>Show Less</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
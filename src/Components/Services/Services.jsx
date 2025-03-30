import React, { useState } from 'react';
import './Services.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from '../../assets/services_data';
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
    const [flipped, setFlipped] = useState(Array(services_data.length).fill(false));

    const toggleFlip = (index) => {
        setFlipped(prev => {
            const newFlipped = [...prev];
            newFlipped[index] = !newFlipped[index];
            return newFlipped;
        });
    };

    return (
        <div className='services' id='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} className=''/>
            </div>
            <div className="services-container">
                {services_data.map((service, index) => (
                    <div 
                        key={index} 
                        className={`services-card ${flipped[index] ? 'flipped' : ''}`} 
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="card-front">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} />
                            </div>
                        </div>
                        <div className="card-back">
                            <h2>{service.s_name}</h2>
                            <p>{service.details}</p>
                            <div className="services-readmore">
                                <p>Show Less</p>
                                <img src={arrow_icon} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
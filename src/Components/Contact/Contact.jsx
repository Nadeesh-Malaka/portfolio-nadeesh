import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Contact me</h1>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>Nadeeshmalaka50@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={phone_icon} alt="" />
            <p>+94 77 490 2773</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>Colombo,Sri Lanka</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
            <lable for="name">Your Name</lable>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <lable for="email">Your Email</lable>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <lable for="message">Write your message here</lable>
            <textarea name="message" placeholder="Enter your message" required rows="8" ></textarea>
            <button className="contact-submit" type="submit">Send Message</button>
            
        </form>
      </div>
    </div>
  );
};

export default Contact;

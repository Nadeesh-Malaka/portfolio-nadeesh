import React, { useState } from "react"; 
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = useState({ message: "", type: "" }); // Add type for styling

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult({ message: "Sending...", type: "pending" });

    const formData = new FormData(event.target);
    formData.append("access_key", "cf3e3a8e-3bd3-43bd-9345-2c9a295ffb03");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult({ message: "Form Submitted Successfully!", type: "success" });
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult({ message: data.message, type: "error" });
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult({ message: "Failed to send message. Please try again later.", type: "error" });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
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
              <img src={mail_icon} alt="Email Icon" />
              <p>Nadeeshmalaka50@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="Phone Icon" />
              <p>+94 77 490 2773</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          {/* Show result message with the correct class */}
          {result.message && (
            <p className={`result-message ${result.type}`}>{result.message}</p>
          )}

          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" placeholder="Enter your message" required rows="8"></textarea>
          <button className="contact-submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

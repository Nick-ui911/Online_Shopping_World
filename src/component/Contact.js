import React from 'react';
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const Contact = () => {

    const onlinecheck = useOnline();
    if (!onlinecheck)  {   
      return (
        <Offline/>
      )
    };
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <div className="contact-info">
                <h2>Email:</h2>
                <p>nbaghel392@gmail.com</p>
                <h2>Mobile no :</h2>
                <p>9755716505</p>
            </div>
            <form className="contact-form">
                <h2>Send us a message:</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
            <div className="social-media">
                <h2>Follow us:</h2>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/nikhilsinghbaghel8/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    );
};

export default Contact;
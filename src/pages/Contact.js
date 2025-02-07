import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tn7kqqq', // Service ID
        'template_9wqh6qs', // Template ID
        form.current,
        'SLrAIuiJEEZ44cxP1' // User ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          If you have any questions or would like to get in touch, please fill out the form below.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="from_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="from_email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <form id="contactForm" action="https://your-wordpress-site.com/wp-json/contact-form-7/v1/contact-forms/1/feedback" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
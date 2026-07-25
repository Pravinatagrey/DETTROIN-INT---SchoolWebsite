//import { useState } from "react";
//import { api } from "@/lib/api";
//import { toast } from "sonner";
//import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import React, { useState } from 'react';
import '../components/contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

    
  return (
    <>      <Header />
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Left Column - Contact Info */}
        <div className="contact-info">
          <h1 className="info-title">Get in Touch</h1>
          <p className="info-subtitle">We'd love to hear from you</p>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h3>Visit us</h3>
              <p>Akshara Campus, Ring Road, Aligarh, UP 202001, India</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h3>Call us</h3>
              <p>+91 98765 43210 / +91 98765 43211</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h3>Email us</h3>
              <p>hello@aksharaa.school · admissions@aksharaa.school</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <h3>Office hours</h3>
              <p>Monday – Saturday · 8:00 am – 4:00 pm</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-wrapper">
          <h2 className="form-title">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {isSubmitted && (
              <div className="success-message">
                ✓ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
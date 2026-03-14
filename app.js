import { useState } from "react";
import "@/App.css";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    "AC Repair & Emergency Service",
    "AC Installation & Uninstallation",
    "AC Maintenance & AMC",
    "Chiller Service & Industrial Cooling",
    "Air Ducting Solutions",
    "Fresh Air Ventilation Systems",
    "Exhaust System Installation",
    "Commercial Kitchen Hood Cleaning",
    "HVAC Contracts"
  ];

  const whatsappNumber = "919663205592";
  const whatsappMessage = "Hi! I'm interested in your AC services. Can you help me?";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await axios.post(`${API}/quotes`, formData);
      setSubmitMessage("Thank you! We'll contact you within 30 minutes.");
      setFormData({
        full_name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      setSubmitMessage("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float" onClick={openWhatsApp}>
        <svg viewBox="0 0 32 32" fill="white">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.375c-2.537 0-5.012-0.675-7.2-1.95l-0.525-0.3-5.438 1.4 1.463-5.288-0.35-0.563c-1.4-2.238-2.138-4.8-2.138-7.45 0-7.762 6.325-14.087 14.088-14.087s14.088 6.325 14.088 14.088-6.326 14.088-14.088 14.088zM23.088 19.45c-0.425-0.213-2.512-1.238-2.9-1.375-0.388-0.138-0.675-0.213-0.95 0.213s-1.088 1.375-1.325 1.65c-0.238 0.275-0.487 0.313-0.912 0.1s-1.775-0.65-3.387-2.088c-1.25-1.113-2.1-2.488-2.35-2.913s-0.025-0.65 0.188-0.863c0.188-0.188 0.425-0.488 0.638-0.738 0.213-0.25 0.275-0.425 0.425-0.7 0.138-0.275 0.075-0.525-0.038-0.738s-0.95-2.287-1.3-3.137c-0.338-0.825-0.688-0.713-0.95-0.725-0.238-0.013-0.525-0.013-0.8-0.013s-0.738 0.1-1.125 0.525c-0.387 0.425-1.475 1.438-1.475 3.5s1.512 4.063 1.725 4.338c0.213 0.275 2.975 4.538 7.2 6.363 1.012 0.438 1.8 0.688 2.413 0.888 1.012 0.325 1.938 0.275 2.675 0.175 0.813-0.125 2.512-1.025 2.863-2.025s0.35-1.85 0.25-2.025c-0.1-0.175-0.375-0.275-0.8-0.488z"/>
        </svg>
        <span className="whatsapp-tooltip">Chat with us!</span>
      </div>

      {/* Announcement Banner */}
      <div className="announcement-banner">
        <p>🎉 Special Discount for New Customers – Up to 15% OFF 🎉</p>
      </div>

      {/* Header/Navigation */}
      <header className="site-header">
        <div className="container header-content">
          <div className="logo">
            <h1>❄️ Infinity Cooling Solution</h1>
          </div>
          <nav className="nav-menu">
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <a href="tel:9663205592" className="btn-primary-small">📞 Call Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">✨ #1 AC Service in Bengaluru ✨</div>
            <h1 className="hero-title">Fast & Reliable AC Repair & Cooling Solutions in Bengaluru</h1>
            <p className="hero-subtitle">
              Trusted by thousands of homes and businesses across Bengaluru. Our certified technicians provide same-day service with genuine spare parts.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('quote-form')} className="btn-primary">🎯 Get Free Quote</button>
              <a href="tel:9663205592" className="btn-secondary">📞 Call: 9663205592</a>
              <button onClick={openWhatsApp} className="btn-whatsapp">💬 WhatsApp Us</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/80bf708e-86a7-4545-9fe9-d4beb4796f78/80bf708e-86a7-4545-9fe9-d4beb4796f78/hero/hero-main-8a40d90359654abe8400828af106ba03.png" alt="HVAC Service" />
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="quote-form-section">
        <div className="container">
          <div className="quote-form-content">
            <div className="form-header">
              <h2>🎁 Get Your Free Quote Today</h2>
              <p>Our expert team will contact you within 30 minutes</p>
            </div>
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} required placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                <label>Service Required *</label>
                <select name="service" value={formData.service} onChange={handleInputChange} required>
                  <option value="">Select a service</option>
                  {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group full-width">
                <label>Message (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "🚀 Request a Callback"}
              </button>
              {submitMessage && <p className="submit-message success">{submitMessage}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>🌟 Our Complete HVAC Services</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service}</h3>
                <p>Professional solution for {service.toLowerCase()} in Bengaluru.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="site-footer">
        <div className="container">
          <p>© 2026 Infinity Cooling Solution. All Rights Reserved.</p>
          <p>Bengaluru, Karnataka | 9663205592</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

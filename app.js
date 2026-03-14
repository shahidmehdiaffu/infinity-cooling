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
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.325 1.288 4.962 1.988 7.812 1.988 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.375c-2.537 0-5.012-0.675-7.2-1.95l-0.525-0.3-5.438 1.4 1.463-5.288-0.35-0.563c-1.4-2.238-2.138-4.8-2.138-7.45 0-7.762 6.325-14.087 14.088-14.087s14.088 6.325 14.088 14.088-6.326 14.088-14.088 14.088zM23.088 19.45c-0.425-0.213-2.512-1.238-2.9-1.375-0.388-0.138-0.675-0.213-0.95 0.213s-1.088 1.375-1.325 1.65c-0.238 0.275-0.487 0.313-0.912 0.1s-1.775-0.65-3.387-2.088c-1.25-1.113-2.1-2.488-2.35-2.913s-0.025-0.65 0.188-0.863c0.188-0.188 0.425-0.488 0.638-0.738 0.213-0.25 0.275-0.425 0.425-0.7 0.138-0.275 0.075-0.525-0.038-0.738s-0.95-2.287-1.3-3.137c-0.338-0.825-0.688-0.713-0.95-0.725-0.238-0.013-0.525-0.013-0.8-0.013s-0.738 0.1-1.125 0.525c-0.387 0.425-1.475 1.438-1.475 3.5s1.512 4.063 1.725 4.338c0.213 0.275 2.975 4.538 7.2 6.363 1.012 0.438 1.8 0.688 2.413 0.888 1.012 0.325 1.938 0.275 2.675 0.175 0.813-0.125 2.512-1.025 2.863-2.025s0.35-1.85 0.25-2.025c-0.1-0.175-0.375-0.275-0.8-0.488z\"/>\n        </svg>\n        <span className=\"whatsapp-tooltip\">Chat with us!</span>\n      </div>\n\n      {/* Announcement Banner */}\n      <div className=\"announcement-banner\">\n        <p>🎉 Special Discount for New Customers – Up to 15% OFF 🎉</p>\n      </div>\n\n      {/* Header/Navigation */}\n      <header className=\"site-header\">\n        <div className=\"container header-content\">\n          <div className=\"logo\">\n            <h1>❄️ Infinity Cooling Solution</h1>\n          </div>\n          <nav className=\"nav-menu\">\n            <button onClick={() => scrollToSection('services')} className=\"nav-link\">Services</button>\n            <button onClick={() => scrollToSection('contact')} className=\"nav-link\">Contact</button>\n            <a href=\"tel:9663205592\" className=\"btn-primary-small\">📞 Call Now</a>\n          </nav>\n        </div>\n      </header>\n\n      {/* Hero Section */}\n      <section className=\"hero-section\">\n        <div className=\"container hero-content\">\n          <div className=\"hero-text\">\n            <div className=\"hero-badge\">✨ #1 AC Service in Bengaluru ✨</div>\n            <h1 className=\"hero-title\">Fast & Reliable AC Repair & Cooling Solutions in Bengaluru</h1>\n            <p className=\"hero-subtitle\">\n              Trusted by thousands of homes and businesses across Bengaluru. Our certified technicians provide same-day service with genuine spare parts.\n            </p>\n            <div className=\"hero-buttons\">\n              <button onClick={() => scrollToSection('quote-form')} className=\"btn-primary\">🎯 Get Free Quote</button>\n              <a href=\"tel:9663205592\" className=\"btn-secondary\">📞 Call: 9663205592</a>\n              <button onClick={openWhatsApp} className=\"btn-whatsapp\">💬 WhatsApp Us</button>\n            </div>\n          </div>\n          <div className=\"hero-image\">\n            <img src=\"https://cdn.ailandingpage.ai/landingpage_io/user-generate/80bf708e-86a7-4545-9fe9-d4beb4796f78/80bf708e-86a7-4545-9fe9-d4beb4796f78/hero/hero-main-8a40d90359654abe8400828af106ba03.png\" alt=\"HVAC Service\" />\n          </div>\n        </div>\n      </section>\n\n      {/* Quote Form Section */}\n      <section id=\"quote-form\" className=\"quote-form-section\">\n        <div className=\"container\">\n            <div className=\"quote-form-content\">\n                <div className=\"form-header\">\n                    <h2>🎁 Get Your Free Quote Today</h2>\n                    <p>Our expert team will contact you within 30 minutes</p>\n                </div>\n                <form onSubmit={handleSubmit} className=\"quote-form\">\n                    <div className=\"form-group\">\n                        <label>Full Name *</label>\n                        <input type=\"text\" name=\"full_name\" value={formData.full_name} onChange={handleInputChange} required placeholder=\"Enter your full name\" />\n                    </div>\n                    <div className=\"form-group\">\n                        <label>Phone Number *</label>\n                        <input type=\"tel\" name=\"phone\" value={formData.phone} onChange={handleInputChange} required placeholder=\"Enter your phone number\" />\n                    </div>\n                    <div className=\"form-group\">\n                        <label>Email Address *</label>\n                        <input type=\"email\" name=\"email\" value={formData.email} onChange={handleInputChange} required placeholder=\"Enter your email address\" />\n                    </div>\n                    <div className=\"form-group\">\n                        <label>Service Required *</label>\n                        <select name=\"service\" value={formData.service} onChange={handleInputChange} required>\n                            <option value=\"\">Select a service</option>\n                            {services.map((s, i) => <option key={i} value={s}>{s}</option>)}\n                        </select>\n                    </div>\n                    <div className=\"form-group full-width\">\n                        <label>Message (Optional)</label>\n                        <textarea name=\"message\" value={formData.message} onChange={handleInputChange} rows=\"4\" placeholder=\"How can we help?\" />\n                    </div>\n                    <button type=\"submit\" className=\"btn-submit\" disabled={isSubmitting}>\n                        {isSubmitting ? \"Submitting...\" : \"🚀 Request a Callback\"}\n                    </button>\n                    {submitMessage && <p className=\"submit-message success\">{submitMessage}</p>}\n                </form>\n            </div>\n        </div>\n      </section>\n\n      {/* Services Section */}\n      <section id=\"services\" className=\"services-section\">\n        <div className=\"container\">\n          <div className=\"section-header\">\n            <h2>🌟 Our Complete HVAC Services</h2>\n          </div>\n          <div className=\"services-grid\">\n            {services.map((service, index) => (\n              <div key={index} className=\"service-card\">\n                <h3>{service}</h3>\n                <p>Professional solution for {service.toLowerCase()} in Bengaluru.</p>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      {/* Footer */}\n      <footer id=\"contact\" className=\"site-footer\">\n        <div className=\"container\">\n          <p>© 2026 Infinity Cooling Solution. All Rights Reserved.</p>\n          <p>Bengaluru, Karnataka | 9663205592</p>\n        </div>\n      </footer>\n    </div>\n  );\n}\n\nexport default App;
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // <-- Import motion
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaPaperPlane,
  FaUser,
  FaMobileAlt
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or service
    console.log(formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Panel: Contact Info */}
          <div className="contact-info-panel">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-subtitle">Fill up the form and I will get back to you within 24 hours.</p>
            
            <div className="info-item">
              <FaPhone />
              <span>+91 9515096422</span>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <span>bhargavaprasadkagitala@gmail.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Visakhapatnam, India</span>
            </div>

            <div className="social-links">
              <a href="https://github.com/bhargav676" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/k-bhargava-prasad-6842b0291/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <div className="input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="mobile">Mobile Number</label>
                <div className="input-with-icon">
                  <FaMobileAlt className="input-icon" />
                  <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} rows="5" onChange={handleChange} required />
              </div>
              
              <button type="submit" className="submit-button">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* --- STYLES ARE NOW IN A JSX STYLE BLOCK FOR BETTER FEATURES --- */}
      <style jsx>{`
        :root {
          --accent-color: #81e6d9;
          --bg-dark: #111;
          --bg-light: #1a1a1a;
          --text-primary: #ffffff;
          --text-secondary: #a0aec0;
          --border-color: #2d3748;
        }

        .contact-section {
          background-color: #000000;
          min-height: 100vh;
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Arial', 'Helvetica', sans-serif;
        }

        .contact-card {
          max-width: 1100px;
          width: 100%;
          display: flex;
          background-color: var(--bg-dark);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(129, 230, 217, 0.2);
        }

        /* --- Left Info Panel --- */
        .contact-info-panel {
          flex-basis: 40%;
          padding: 40px;
          background: linear-gradient(135deg, #2D3748, #1A202C);
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .info-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: var(--accent-color);
        }
        .info-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1rem;
        }
        .info-item svg {
          font-size: 1.2rem;
          color: var(--accent-color);
        }

        /* --- Social Links --- */
        .social-links {
          margin-top: auto; /* Pushes to the bottom */
          display: flex;
          gap: 20px;
        }
        .social-links a {
          color: var(--text-secondary);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          color: var(--accent-color);
          transform: scale(1.1);
        }

        /* --- Right Form Panel --- */
        .contact-form-panel {
          flex-basis: 60%;
          padding: 40px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: bold;
        }
        .input-with-icon {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        input, textarea {
          width: 100%;
          padding: 12px;
          background-color: var(--bg-light);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-sizing: border-box; /* Important for padding */
        }
        input {
          padding-left: 45px;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(129, 230, 217, 0.2);
        }
        input:focus + .input-icon,
        .input-with-icon:focus-within .input-icon {
            color: var(--accent-color);
        }
        textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* --- Submit Button --- */
        .submit-button {
          padding: 12px 25px;
          background-color: var(--accent-color);
          color: #1A202C; /* Dark text for contrast */
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 10px;
        }
        .submit-button:hover {
          background-color: #A0AEC0;
          box-shadow: 0 5px 15px rgba(129, 230, 217, 0.3);
          transform: translateY(-2px);
        }

        /* --- Responsive Design --- */
        @media (max-width: 900px) {
          .contact-card {
            flex-direction: column;
          }
          .contact-info-panel, .contact-form-panel {
            flex-basis: 100%;
          }
          .social-links {
            margin-top: 20px;
          }
        }
        @media (max-width: 480px) {
          .contact-section {
            padding: 40px 10px;
          }
          .contact-info-panel, .contact-form-panel {
            padding: 25px;
          }
          .info-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactUs;
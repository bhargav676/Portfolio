import React, { useState } from 'react';
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
    console.log(formData);
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  const styles = {
    container: {
      backgroundColor: '#000000',
      minHeight: '100vh',
      padding: '50px 20px',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentWrapper: {
      maxWidth: '1200px',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      margin: '0 auto',
    },
    section: {
      flex: '1 1 400px', // Flex grow, shrink, and basis
      minWidth: '0', // Prevents overflow
      padding: '20px',
    },
    formCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.2s ease',
      height: '100%', // Ensures card takes full height of content
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '30px',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #ffffff, #cccccc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    inputContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    inputIcon: {
      position: 'absolute',
      left: '10px',
      color: '#ffffff',
      fontSize: '1.2rem',
      zIndex: 1,
    },
    input: {
      padding: '12px 12px 12px 40px',
      backgroundColor: '#2a2a2a',
      border: 'none',
      borderRadius: '5px',
      color: '#ffffff',
      fontSize: '1rem',
      width: '100%',
      outline: 'none',
      boxSizing: 'border-box',
    },
    textareaContainer: {
      position: 'relative',
      width: '100%',
    },
    textarea: {
      padding: '12px',
      backgroundColor: '#2a2a2a',
      border: 'none',
      borderRadius: '5px',
      color: '#ffffff',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      width: '100%',
      outline: 'none',
      boxSizing: 'border-box',
    },
    button: {
      padding: '12px 25px',
      backgroundColor: '#ffffff',
      color: '#000000',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      marginTop: '10px',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontSize: '1.1rem',
    },
    socialLinks: {
      display: 'flex',
      gap: '20px',
      marginTop: '30px',
    },
    icon: {
      color: '#ffffff',
      fontSize: '1.5rem',
      transition: 'color 0.3s ease',
    },
    // Responsive Design
    '@media (max-width: 1024px)': {
      section: {
        flex: '1 1 350px',
      },
      title: {
        fontSize: '2rem',
      },
      formCard: {
        padding: '25px',
      },
    },
    '@media (max-width: 768px)': {
      contentWrapper: {
        flexDirection: 'column',
        gap: '30px',
      },
      section: {
        flex: '1 1 100%',
        padding: '15px',
      },
      container: {
        padding: '30px 15px',
      },
      formCard: {
        padding: '20px',
      },
      title: {
        fontSize: '1.8rem',
        marginBottom: '20px',
      },
      input: {
        fontSize: '0.95rem',
        padding: '10px 10px 10px 35px',
      },
      textarea: {
        fontSize: '0.95rem',
        padding: '10px',
        minHeight: '120px',
      },
      inputIcon: {
        fontSize: '1rem',
      },
      button: {
        padding: '10px 20px',
      },
    },
    '@media (max-width: 480px)': {
      container: {
        padding: '20px 10px',
      },
      section: {
        padding: '10px',
      },
      formCard: {
        padding: '15px',
      },
      title: {
        fontSize: '1.5rem',
        marginBottom: '15px',
      },
      form: {
        gap: '15px',
      },
      input: {
        fontSize: '0.9rem',
        padding: '8px 8px 8px 30px',
      },
      textarea: {
        fontSize: '0.9rem',
        padding: '8px',
        minHeight: '100px',
      },
      inputIcon: {
        fontSize: '0.9rem',
        left: '8px',
      },
      button: {
        padding: '8px 15px',
        fontSize: '0.9rem',
      },
      contactInfo: {
        gap: '20px',
      },
      infoItem: {
        fontSize: '0.9rem',
        gap: '10px',
      },
      socialLinks: {
        gap: '15px',
        marginTop: '20px',
      },
      icon: {
        fontSize: '1.2rem',
      },
    },
  };

  return (
    <div style={styles.container} id="contact">
      <div style={styles.contentWrapper}>
        {/* Contact Form Section */}
        <div style={styles.section}>
          <div 
            style={styles.formCard}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h1 style={styles.title}>Get in Touch</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.inputContainer}>
                <FaUser style={styles.inputIcon} />
                <input
                  style={styles.input}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div style={styles.inputContainer}>
                <FaEnvelope style={styles.inputIcon} />
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div style={styles.inputContainer}>
                <FaMobileAlt style={styles.inputIcon} />
                <input
                  style={styles.input}
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Your Mobile Number"
                  required
                />
              </div>

              <div style={styles.textareaContainer}>
                <textarea
                  style={styles.textarea}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>

              <button 
                style={styles.button}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cccccc'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div style={styles.section}>
          <h1 style={styles.title}>Contact Info</h1>
          <div style={styles.contactInfo}>
            <div style={styles.infoItem}>
              <FaEnvelope style={styles.icon} />
              <span>bhargavaprasadkagitala@gmail.com</span>
            </div>
            <div style={styles.infoItem}>
              <FaPhone style={styles.icon} />
              <span>+91 9515096422</span>
            </div>
            <div style={styles.infoItem}>
              <FaMapMarkerAlt style={styles.icon} />
              <span>visakhapatnam</span>
            </div>
          </div>
          
          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/bhargav676" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub 
                style={styles.icon}
                onMouseOver={(e) => e.currentTarget.style.color = '#cccccc'}
                onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/k-bhargava-prasad-6842b0291/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin 
                style={styles.icon}
                onMouseOver={(e) => e.currentTarget.style.color = '#cccccc'}
                onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
              />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTwitter 
                style={styles.icon}
                onMouseOver={(e) => e.currentTarget.style.color = '#cccccc'}
                onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
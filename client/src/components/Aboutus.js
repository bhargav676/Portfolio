import React from 'react';
import p from '../images/profile.jpg';


const AboutUs = () => {

  const screenWidth = window.innerWidth;
  const styles = {
    container: {
      backgroundColor: '#000000',
      // minHeight: '100vh',
      padding: '40px',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    contentWrapper: {
      maxWidth: '1200px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '40px',
      padding: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: '0 0 auto',
      position: 'relative',
      bottom: screenWidth >= 768 ? '50px' : '0px', 
      width: '300px',
      height: '300px',
      borderRadius: '50%', 
      overflow: 'hidden',
      boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      border: '3px solid #ffffff',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    textContainer: {
      flex: '1',
      minWidth: '300px',
      position: 'relative',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#ffffff',
      borderBottom: '2px solid #ffffff',
      paddingBottom: '10px',
      position: 'relative',
      animation: 'fadeIn 1s ease-in',
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '20px',
    },
    skillItem: {
      backgroundColor: '#222222',
      padding: '8px 15px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    socialLinks: {
      marginTop: '30px',
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
    },
    socialIcon: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.2rem',
      padding: '8px 15px',
      backgroundColor: '#333333',
      borderRadius: '5px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    button: {
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '20px',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
    },
    achievementSection: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '10px',
    },
    achievementItem: {
      marginBottom: '15px',
      fontSize: '1rem',
      color: '#d0d0d0',
    }
  };

  return (
    <div style={styles.container} id="about">
      <div style={styles.contentWrapper}>
        <div 
          style={styles.imageContainer}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.2)';
          }}
        >
          <img 
            src={p} 
            alt="Profile"
            style={styles.profileImage}
          />
        </div>

        <div style={styles.textContainer}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.paragraph}>
          Hello! I'm Bhargava Prasad, a passionate full-stack web developer. 
          I’ve built several projects and enjoy turning ideas into real websites using creative designs and modern technology.
          </p>
          <p style={styles.paragraph}>
          Through my journey in web development,
           I’ve learned the value of attention to detail,
            user-focused design, and continuous learning. 
            I enjoy taking on challenges and collaborating with others to build meaningful projects.
          </p>

         

          <div style={styles.achievementSection}>
            <h3>Achievements</h3>
            <div style={styles.achievementItem}>📱 Designed a farmerdirect website</div>
            <div style={styles.achievementItem}>📈 Delivered 7+ successful projects</div>
            <div style={styles.achievementItem}>⚡ One of the project work in real-time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
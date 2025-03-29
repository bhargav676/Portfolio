import React from 'react';

import project1Img from '../images/p1.jpg';
import project2Img from '../images/p2.jpg';
import project3Img from '../images/p3.png';
import project4Img from '../images/p4.jpg';
import project5Img from '../images/p5.jpg';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Farm-Direct',
      image: project2Img,
      description: 'FarmDirect connects farmers with customers for fresh products at fair prices. Farmers set prices, and customers browse easily. The website is mobile-friendly, ensuring a smooth farm-to-table shopping experience.',
      liveDemo: 'https://farmdirect-beta.vercel.app/',
    },
    {
      id: 2,
      title: 'Electronics E-Commerce',
      image: project1Img,
      description: 'Built a MERN-based e-commerce site selling 100+ electronic parts like Arduino and sensors. Added Dynamic Projects, where admins upload guides with YouTube integration for interactive learning.',
      liveDemo: 'https://rlr-pi.vercel.app/',
    },
    {
      id: 3,
      title: 'Movie Ticket Booking',
      image: project3Img,
      description: 'Developed a platform for browsing movies, selecting seats, and making payments securely. Includes an Admin Dashboard for managing movies and bookings, ensuring a smooth user experience.',
      liveDemo: 'https://movie-omega-five.vercel.app/',
    },
    {
      id: 4,
      title: 'Book Management System',
      image: project4Img,
      description: 'The RFID-Based Book Management System automates book exchanges with real-time tracking. RFID tags enable secure verification and instant return status updates for better library management.',
      liveDemo: '',
    },
    {
      id: 5,
      title: 'Job Finder',
      image: project5Img,
      description: 'A job search website that helps users find jobs by location and role. Users can filter listings, view job details, and apply easily, making the job search process faster and more efficient.',
      liveDemo: 'https://jobfinder-8zoms3qr1-bhargavks-projects.vercel.app/',
    },
  ];
  

  const styles = {
    container: {
      backgroundColor: '#000000',
      minHeight: '100vh',
      padding: '40px',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '40px',
      color: '#ffffff',
      borderBottom: '2px solid #ffffff',
      paddingBottom: '10px',
      textAlign: 'center',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      width: '100%',
      maxWidth: '1200px',
    },
    projectCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '7px',
      overflow: 'hidden',
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      display: 'block',
    },
    projectContent: {
      padding: '20px',
    },
    projectTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      color: '#ffffff',
    },
    projectDescription: {
      fontSize: '1rem',
      color: '#e0e0e0',
      marginBottom: '15px',
      lineHeight: '1.5',
    },
    techList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '15px',
    },
    techItem: {
      backgroundColor: '#333333',
      padding: '5px 10px',
      borderRadius: '15px',
      fontSize: '0.85rem',
      color: '#ffffff',
    },
    liveDemoLink: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#ffffff',
      color: '#000000',
      textDecoration: 'none',
      borderRadius: '25px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container} id="project">
      <h1 style={styles.heading}>My Projects</h1>
      <div style={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              style={styles.projectImage}
            />
            <div style={styles.projectContent}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <p style={styles.projectDescription}>{project.description}</p>
              <div style={styles.techList}>
              </div>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.liveDemoLink}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
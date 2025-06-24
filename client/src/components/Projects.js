import React, { useState } from 'react'; // <-- Import useState
import { motion } from 'framer-motion';
import { FaGithub, FaEye } from 'react-icons/fa';

// --- Your image imports remain the same ---
import project1Img from '../images/p1.jpg';
import project2Img from '../images/p2.jpg';
import project3Img from '../images/p3.png';
import project4Img from '../images/p4.jpg';
import project5Img from '../images/p5.jpg';
import project6Img from '../images/p6.jpg';
import project7Img from '../images/P7.jpg';

const projects = [
  // --- Your projects array remains the same ---
  {
    id: 1,
    title: 'Farm-Direct',
    image: project2Img,
    description: 'FarmDirect connects farmers with customers for fresh products at fair prices. Farmers set prices, and customers browse easily. The website is mobile-friendly, ensuring a smooth farm-to-table shopping experience.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveDemo: 'https://farmdirect-beta.vercel.app/',
    githubLink: 'https://github.com/your-repo/farm-direct',
  },
  {
    id: 2,
    title: 'Electronics E-Commerce',
    image: project1Img,
    description: 'Built a MERN-based e-commerce site selling 100+ electronic parts like Arduino and sensors. Added Dynamic Projects, where admins upload guides with YouTube integration for interactive learning.',
    tech: ['MERN', 'Redux', 'YouTube API'],
    liveDemo: 'https://rlr-pi.vercel.app/',
    githubLink: 'https://github.com/your-repo/electronics-ecommerce',
  },
  {
    id: 3,
    title: 'Movie Ticket Booking',
    image: project3Img,
    description: 'Developed a platform for browsing movies, selecting seats, and making payments securely. Includes an Admin Dashboard for managing movies and bookings, ensuring a smooth user experience.',
    tech: ['React', 'Stripe', 'Node.js'],
    liveDemo: 'https://movie-omega-five.vercel.app/',
    githubLink: 'https://github.com/your-repo/movie-booking',
  },
  {
    id: 4,
    title: 'Book Management System',
    image: project4Img,
    description: 'The RFID-Based Book Management System automates book exchanges with real-time tracking. RFID tags enable secure verification and instant return status updates for better library management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'RFID'],
    liveDemo: '',
    githubLink: 'https://github.com/your-repo/rfid-library',
  },
  {
    id: 5,
    title: 'Job Finder',
    image: project5Img,
    description: 'A job search website that helps users find jobs by location and role. Users can filter listings, view job details, and apply easily, making the job search process faster and more efficient.',
    tech: ['React', 'API', 'Tailwind CSS'],
    liveDemo: 'https://jobfinder-8zoms3qr1-bhargavks-projects.vercel.app/',
    githubLink: 'https://github.com/your-repo/job-finder',
  },
  {
    id: 6,
    title: 'Wireless EV Charging System',
    image: project6Img,
    description: 'The Wireless EV Charging System uses RFID technology for automated vehicle identification and cost calculation at charging stations. It features a time-based charging system, an LCD display for real-time cost updates, and automated cost processing.',
    tech: ['Embedded C', 'Arduino', 'RFID'],
    liveDemo: '',
    githubLink: 'https://github.com/your-repo/ev-charging',
  },
  {
    id: 7,
    title: 'Live IPL Score Display',
    image: project7Img,
    description: 'Built an ESP32-based device to retrieve live live IPL match scores via CricAPI and show them on an I2C LCD with a clean, real-time format. Includes reliable team name parsing and periodic updates.',
    tech: ['ESP32', 'CricAPI', 'I2C LCD'],
    liveDemo: '',
    githubLink: 'https://github.com/your-repo/ipl-display',
  },
];

// --- NEW LOGIC STARTS HERE ---
const Projects = () => {
  // State to manage the expanded view
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Number of projects to show initially. I've chosen 4 as it works well with the alternating layout.
  const INITIAL_PROJECT_COUNT = 4;

  // Determine which projects to display based on the state
  const projectsToShow = isExpanded ? projects : projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-list">
          {/* We now map over the conditionally sliced array */}
          {projectsToShow.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image-container">
                 <a href={project.liveDemo || project.githubLink} target="_blank" rel="noopener noreferrer">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                 </a>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="description-box">
                  <p>{project.description}</p>
                </div>
                <div className="tech-stack">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="tech-item">{techItem}</span>
                  ))}
                </div>
                <div className="project-links">
                   {project.githubLink && (
                     <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-button github-link">
                        <FaGithub /> GitHub
                     </a>
                   )}
                   {project.liveDemo && (
                     <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="link-button demo-link">
                       <FaEye /> Demo
                     </a>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Button to Show More/Less Projects --- */}
        {projects.length > INITIAL_PROJECT_COUNT && (
          <div className="show-more-container">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="show-more-button"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}

      </div>
      <style jsx>{`
        /* --- ALL YOUR PREVIOUS STYLES REMAIN THE SAME --- */
        .projects-section {
          background-color: #000000;
          padding: 100px 20px;
          color: #e2e8f0;
          font-family: 'Arial', 'Helvetica', sans-serif;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 3rem;
          color: #81e6d9;
          text-align: center;
          margin-bottom: 80px;
          font-weight: 700;
        }
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 100px;
        }
        .project-item {
          display: grid;
          grid-template-columns: 1fr 1fr; 
          gap: 40px;
          align-items: center;
        }
        .project-image-container {
          width: 100%;
          height: 300px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
          grid-column: 1;
        }
        .project-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }
        .project-content {
          grid-column: 2;
        }
        .project-item:nth-child(even) .project-image-container {
           grid-column: 2;
        }
        .project-item:nth-child(even) .project-content {
            grid-column: 1;
            grid-row: 1;
        }
        .project-title {
          font-size: 1.75rem;
          color: #81e6d9;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .description-box {
          background-color: rgb(20, 20, 20);
          padding: 20px;
          border-radius: 5px;
          line-height: 1.6;
          color: #cbd5e0;
          font-size: 0.95rem;
          margin-bottom: 25px;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }
        .tech-item {
          font-family: 'SF Mono', 'Fira Code', 'Roboto Mono', monospace;
          font-size: 0.85rem;
          color: #81e6d9;
          background-color: rgba(129, 230, 217, 0.1);
          padding: 5px 10px;
          border-radius: 4px;
        }
        .project-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .link-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          border: 1px solid;
        }
        .github-link {
          color: #81e6d9;
          border-color: #81e6d9;
        }
        .github-link:hover {
          background-color: rgba(129, 230, 217, 0.1);
        }
        .demo-link {
          color: #f687b3;
          border-color: #f687b3;
        }
        .demo-link:hover {
          background-color: rgba(246, 135, 179, 0.1);
        }

        /* --- NEW STYLES FOR THE BUTTON --- */
        .show-more-container {
            text-align: center;
            margin-top: 60px; /* Space above the button */
        }
        .show-more-button {
            background-color: transparent;
            color: #81e6d9;
            border: 2px solid #81e6d9;
            padding: 12px 30px;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 50px; /* Pill shape */
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .show-more-button:hover {
            background-color: rgba(129, 230, 217, 0.1);
            transform: translateY(-2px);
        }

        /* --- Responsive Design for Mobile --- */
        @media (max-width: 768px) {
          .projects-list {
            gap: 70px;
          }
          .project-item,
          .project-item:nth-child(even) {
            grid-template-columns: 1fr; 
          }
          .project-image-container,
          .project-item:nth-child(even) .project-image-container {
             grid-column: 1;
             height: 220px;
          }
          .project-content,
          .project-item:nth-child(even) .project-content {
             grid-column: 1;
             grid-row: 2;
          }
           .project-title {
            margin-top: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
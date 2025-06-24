"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Constants for categories
const CATEGORIES = {
  FRONTEND: { name: "Frontend" },
  BACKEND: { name: "Backend" },
  LANGUAGES: { name: "Languages" },
  TOOLS: { name: "Tools" },
};

// Skills array
const skills = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", title: "React.js", category: CATEGORIES.FRONTEND, proficiency: 80 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", title: "Node.js", category: CATEGORIES.BACKEND, proficiency: 70 },
  { src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", title: "Express.js", category: CATEGORIES.BACKEND, proficiency: 65 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", title: "MongoDB", category: CATEGORIES.BACKEND, proficiency: 60 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", title: "HTML", category: CATEGORIES.FRONTEND, proficiency: 85 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", title: "CSS", category: CATEGORIES.FRONTEND, proficiency: 80 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", title: "Tailwind", category: CATEGORIES.FRONTEND, proficiency: 75 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", title: "JavaScript", category: CATEGORIES.LANGUAGES, proficiency: 90 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", title: "C", category: CATEGORIES.LANGUAGES, proficiency: 90 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png", title: "C++", category: CATEGORIES.LANGUAGES, proficiency: 95 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", title: "Python", category: CATEGORIES.LANGUAGES, proficiency: 85 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", title: "GitHub", category: CATEGORIES.TOOLS, proficiency: 70 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", title: "Figma", category: CATEGORIES.TOOLS, proficiency: 60 },
  { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", title: "Postman", category: CATEGORIES.TOOLS, proficiency: 65 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg", title: "Arduino IDE", category: CATEGORIES.TOOLS, proficiency: 50 },
];

// Radar chart data
const radarData = {
  labels: skills.map((skill) => skill.title),
  datasets: [
    {
      label: "Skill Proficiency (%)",
      data: skills.map((skill) => skill.proficiency),
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      borderColor: "rgba(16, 185, 129, 1)",
      borderWidth: 2,
    },
  ],
};

// Radar chart options
const radarOptions = {
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: { color: "rgba(255, 255, 255, 0.1)" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
      pointLabels: {
        font: { size: 10 },
        color: "#d1d5db"
      },
      ticks: { 
        beginAtZero: true, 
        max: 100, 
        stepSize: 20, 
        color: "#d1d5db",
        backdropColor: 'rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: {
    legend: { labels: { color: "#d1d5db" } },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.r !== null) {
            label += context.parsed.r + '%';
          }
          return label;
        }
      }
    }
  },
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category.name === activeCategory)
    : skills;

  const visibleSkills = isMobile && !isExpanded ? filteredSkills.slice(0, 8) : filteredSkills;

  const categories = Object.values(CATEGORIES);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Tech Stack
          </motion.h2>
        </div>
        <div className="category-filters">
          <motion.div
            className={`filter-item ${activeCategory === null ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
            aria-label="Show all skills"
            role="button"
            tabIndex={0}
          >
            All
          </motion.div>
          
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className={`filter-item ${activeCategory === category.name ? "active" : ""}`}
              onClick={() => setActiveCategory(category.name)}
              aria-label={`Filter by ${category.name}`}
              role="button"
              tabIndex={0}
            >
              {category.name}
            </motion.div>
          ))}
        </div>
        
        <div className="skills-content">
          <div className="skills-list">
            <div className="skills-grid">
              {visibleSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="skill-icon-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ scale: 1.1, zIndex: 10 }} /* RESTORED HOVER EFFECT */
                >
                  <img
                    src={skill.src}
                    alt={skill.title}
                    className="skill-icon"
                    onError={() => console.warn(`Failed to load image for ${skill.title}`)}
                  />
                  <div className="icon-line" />
                  <div className="icon-title">{skill.title}</div>
                </motion.div>
              ))}
            </div>
            {isMobile && filteredSkills.length > 8 && (
              <div className="expand-button-container">
                <motion.button
                  className="expand-button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  aria-label={isExpanded ? "Collapse skills list" : "Expand skills list"}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </motion.button>
              </div>
            )}
          </div>
          <div className="skills-radar">
            <h3 className="radar-title">Proficiency Overview</h3>
            <div className="chart-container">
                <Radar data={radarData} options={radarOptions} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .skills-section {
          padding: 60px 0;
          background: #000;
          color: #fafafa;
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 12px;
          color: #e5e7eb;
        }
        .category-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-bottom: 50px;
        }
        .filter-item {
          padding: 4px;
          font-size: 16px;
          font-weight: 500;
          color: #9ca3af; /* Muted gray for inactive items */
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .filter-item:hover {
          color: #fafafa;
        }
        /* UPDATED: Active state uses color and font-weight, no underline */
        .filter-item.active {
          color: #ffffff;
          font-weight: 600;
        }
        .skills-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
        }
        .skills-list {
          flex: 1.5;
          min-width: 300px;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
        }
        .skill-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80px;
          text-align: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }
        .skill-icon {
          width: 38px;
          height: 38px;
          object-fit: contain;
        }
        .skill-icon[src*="expressjs"] {
          filter: invert(1);
        }
        .icon-line {
          width: 30px;
          height: 2px;
          background: #fafafa;
          opacity: 0.1;
        }
        .icon-title {
          font-size: 14px;
          font-weight: 500;
          color: #d1d5db;
        }
        .expand-button-container {
          display: flex;
          justify-content: center;
          margin-top: 25px;
        }
        .expand-button {
          padding: 8px 20px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 500;
          background-color: #a855f7;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .expand-button:hover {
          background-color: #9333ea;
        }
        .skills-radar {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .radar-title {
          text-align: center;
          margin-bottom: 20px;
          color: #d1d5db;
          font-size: 20px;
          font-weight: 600;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 500px;
            height: 450px;
        }
        
        /* RESPONSIVENESS */
        @media (max-width: 850px) {
          .skills-content {
            flex-direction: column;
            gap: 60px;
          }
          .skills-list, .skills-radar {
            flex: none;
            width: 100%;
          }
          .chart-container {
            max-width: 450px;
            height: 400px;
          }
        }
        @media (max-width: 480px) {
          .section-title {
            font-size: 28px;
          }
          .category-filters {
            gap: 16px;
          }
          .filter-item {
            font-size: 15px;
          }
          .skills-grid {
            gap: 30px;
          }
          .skill-icon-item {
             width: 65px;
          }
          .skill-icon {
            width: 34px;
            height: 34px;
          }
          .icon-title {
            font-size: 12px;
          }
          .chart-container {
            max-width: 360px;
            height: 340px;
          }
          .radar-title {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
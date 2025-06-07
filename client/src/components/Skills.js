"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Constants for categories
const CATEGORIES = {
  FRONTEND: {
    name: "Frontend",
    color: "linear-gradient(to right, #ec4899, #a855f7)",
  },
  BACKEND: {
    name: "Backend",
    color: "linear-gradient(to right, #3b82f6, #06b6d4)",
  },
  LANGUAGES: {
    name: "Languages",
    color: "linear-gradient(to right, #f59e0b, #f97316)",
  },
  TOOLS: {
    name: "Tools",
    color: "linear-gradient(to right, #10b981, #22c55e)",
  },
};

// Skills array with explicit express property
const skills = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", title: "React.js", category: CATEGORIES.FRONTEND, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", title: "Node.js", category: CATEGORIES.BACKEND, express: false },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", title: "Express.js", category: CATEGORIES.BACKEND, express: true },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", title: "MongoDB", category: CATEGORIES.BACKEND, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", title: "HTML", category: CATEGORIES.FRONTEND, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", title: "CSS", category: CATEGORIES.FRONTEND, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", title: "Tailwind", category: CATEGORIES.FRONTEND, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", title: "JavaScript", category: CATEGORIES.LANGUAGES, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", title: "C", category: CATEGORIES.LANGUAGES, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png", title: "C++", category: CATEGORIES.LANGUAGES, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", title: "Python", category: CATEGORIES.LANGUAGES, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", title: "GitHub", category: CATEGORIES.TOOLS, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", title: "Figma", category: CATEGORIES.TOOLS, express: false },
  { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", title: "Postman", category: CATEGORIES.TOOLS, express: false },
  { src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg", title: "Arduino IDE", category: CATEGORIES.TOOLS, express: false },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Debounced resize handler
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 100); // Debounce for 100ms
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category.name === activeCategory)
    : skills;

  const visibleSkills = isMobile && !isExpanded ? filteredSkills.slice(0, 10) : filteredSkills;

  const categories = Object.values(CATEGORIES);

  function getSkillRows(skillsArr, itemsPerRow) {
    const rows = [];
    for (let i = 0; i < skillsArr.length; i += itemsPerRow) {
      rows.push(skillsArr.slice(i, i + itemsPerRow));
    }
    return rows;
  }

  const itemsPerRow = 5;
  const skillRows = getSkillRows(visibleSkills, itemsPerRow);

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
          <motion.div
            className="title-underline"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>
        <div className="category-filters">
          <motion.button
            className={`filter-button ${activeCategory === null ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            aria-label="Show all skills"
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`filter-button ${activeCategory === category.name ? "active" : ""}`}
              style={{
                background: activeCategory === category.name ? category.color : "",
                color: activeCategory === category.name ? "#fff" : "",
              }}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              aria-label={`Filter by ${category.name}`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        <br />
        <br />
        <div className="skills-rows-wrapper">
          {skillRows.map((row, rowIdx) => (
            <div className="skills-row" key={`row-${rowIdx}`}>
              {row.map((skill, skillIdx) => (
                <motion.div
                  key={skill.title}
                  className="skill-icon-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (rowIdx * itemsPerRow + skillIdx) }}
                  whileHover={{ scale: 1.13, zIndex: 10 }}
                >
                  <br />
                  {skill.express ? (
                    <span className="icon-express-bg">
                      <img
                        src={skill.src}
                        alt={skill.title}
                        className="skill-icon express-icon"
                        style={{
                          background: "#fff",
                          borderRadius: "50%",
                          padding: "7px",
                          boxShadow: "0 1px 6px rgba(0,0,0,0.13)",
                        }}
                        onError={() => console.warn(`Failed to load image for ${skill.title}`)}
                      />
                    </span>
                  ) : (
                    <img
                      src={skill.src}
                      alt={skill.title}
                      className="skill-icon"
                      onError={() => console.warn(`Failed to load image for ${skill.title}`)}
                    />
                  )}
                  <div className="icon-line" />
                  <div className="icon-title">{skill.title}</div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
          <br/><br/>
        {isMobile && filteredSkills.length > 10 && (
          <div className="expand-button-container">
            <motion.button
              className="expand-button"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              aria-label={isExpanded ? "Collapse skills list" : "Expand skills list"}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </motion.button>
          </div>
        )}
      </div>
        <br/><br/><br/>
      <style jsx>{`
        .skills-section {
          padding: 40px 0 24px 0;
          background: rgb(0, 0, 0);
          color: #fafafa;
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 12px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 28px;
        }
        .section-title {
          font-size: 26px;
          font-weight: bold;
          margin-bottom: 10px;
          background: linear-gradient(to right, #a78bfa, #ec4899, #ef4444);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .title-underline {
          width: 64px;
          height: 3px;
          background: linear-gradient(to right, #a855f7, #ec4899);
          margin: 0 auto 8px;
        }
        .category-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .filter-button {
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          background-color: #1f2937;
          color: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-button:hover {
          background-color: #374151;
        }
        .filter-button.active {
          background-color: #fff;
          color: #000;
        }
        .skills-rows-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 44px;
        }
        .skills-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 80px;
          margin-bottom: 0;
        }
        .skill-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 112px;
          max-width: 130px;
          gap: 12px;
          cursor: pointer;
          background: none;
          border-radius: 0;
          padding: 0;
          box-shadow: none;
        }
        .skill-icon {
          width: 56px;
          height: 56px;
          object-fit: contain;
          background: none;
          border-radius: 0;
          box-shadow: none;
          transition: transform 0.18s;
          display: block;
        }
        .icon-express-bg {
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.13);
          padding: 2px;
        }
        .express-icon {
          width: 48px;
          height: 48px;
        }
        .skill-icon-item:hover .skill-icon {
          transform: scale(1.15);
        }
        .icon-line {
          width: 40px;
          height: 3px;
          background: #fafafa;
          margin: 10px 0 4px 0;
          border-radius: 2px;
          opacity: 0.07;
        }
        .icon-title {
          font-size: 17px;
          font-weight: 600;
          text-align: center;
          color: #fafafa;
          margin-top: 1px;
          letter-spacing: 0.2px;
          text-shadow: 0 1px 8px #000a;
        }
        .expand-button-container {
          display: flex;
          justify-content: center;
          margin-top: 18px;
        }
        .expand-button {
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 12px;
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
        @media (max-width: 1100px) {
          .skills-row {
            gap: 40px;
          }
          .skill-icon-item {
            min-width: 90px;
            max-width: 100px;
          }
        }
        @media (max-width: 768px) {
          .skills-section {
            padding: 24px 0 2px 0;
          }
          .skills-rows-wrapper {
            gap: 19px;
          }
          .skills-row {
            gap: 16px;
          }
          .skill-icon-item {
            min-width: 80px;
            max-width: 90px;
          }
          .skill-icon {
            width: 36px;
            height: 36px;
          }
          .icon-title {
            font-size: 11px;
          }
          .icon-line {
            width: 20px;
            height: 1.5px;
          }
        }
        @media (max-width: 480px) {
          .skills-row {
            gap: 6px;
          }
          .skill-icon-item {
            min-width: 60px;
            max-width: 80px;
          }
          .skill-icon {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Skill categories with color coding
const CATEGORIES = {
  FRONTEND: {
    name: "Frontend",
    color: "linear-gradient(to right, #ec4899, #a855f7)",
    lightColor: "#ec4899",
    darkColor: "#a855f7",
  },
  BACKEND: {
    name: "Backend",
    color: "linear-gradient(to right, #3b82f6, #06b6d4)",
    lightColor: "#3b82f6",
    darkColor: "#06b6d4",
  },
  LANGUAGES: {
    name: "Languages",
    color: "linear-gradient(to right, #f59e0b, #f97316)",
    lightColor: "#f59e0b",
    darkColor: "#f97316",
  },
  TOOLS: {
    name: "Tools",
    color: "linear-gradient(to right, #10b981, #22c55e)",
    lightColor: "#10b981",
    darkColor: "#22c55e",
  },
}

// Skills data with proficiency levels and categories
const skills = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "React.js",
    proficiency: 90,
    category: CATEGORIES.FRONTEND,
    description: "Building interactive UIs with React and its ecosystem",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    title: "Node.js",
    proficiency: 85,
    category: CATEGORIES.BACKEND,
    description: "Server-side JavaScript runtime environment",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg", // Updated URL for Express.js
    title: "Express.js",
    proficiency: 80,
    category: CATEGORIES.BACKEND,
    description: "Web application framework for Node.js",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    title: "MongoDB",
    proficiency: 75,
    category: CATEGORIES.BACKEND,
    description: "NoSQL database for modern applications",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    title: "HTML",
    proficiency: 95,
    category: CATEGORIES.FRONTEND,
    description: "Structure and content of web pages",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    title: "CSS",
    proficiency: 90,
    category: CATEGORIES.FRONTEND,
    description: "Styling and layout for web applications",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    title: "Tailwind",
    proficiency: 85,
    category: CATEGORIES.FRONTEND,
    description: "Utility-first CSS framework",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    title: "JavaScript",
    proficiency: 95,
    category: CATEGORIES.LANGUAGES,
    description: "Programming language of the web",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    title: "TypeScript",
    proficiency: 85,
    category: CATEGORIES.LANGUAGES,
    description: "Typed superset of JavaScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    title: "C",
    proficiency: 70,
    category: CATEGORIES.LANGUAGES,
    description: "General-purpose programming language",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
    title: "C++",
    proficiency: 65,
    category: CATEGORIES.LANGUAGES,
    description: "Extension of the C programming language",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    title: "Python",
    proficiency: 80,
    category: CATEGORIES.LANGUAGES,
    description: "High-level, general-purpose programming language",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    title: "GitHub",
    proficiency: 90,
    category: CATEGORIES.TOOLS,
    description: "Version control and collaboration platform",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    title: "Figma",
    proficiency: 75,
    category: CATEGORIES.TOOLS,
    description: "Design and prototyping tool",
  },
  {
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Postman",
    proficiency: 85,
    category: CATEGORIES.TOOLS,
    description: "API development and testing",
  },
]

// Badge component
const Badge = ({ style, children }) => {
  return (
    <span className="badge" style={style}>
      {children}
    </span>
  )
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false) // State for expand/collapse on mobile

  // Filter skills based on active category
  const filteredSkills = activeCategory ? skills.filter((skill) => skill.category.name === activeCategory) : skills

  // For mobile: limit to 6 skills unless expanded; for laptop: show all
  const visibleSkills = window.innerWidth <= 768 && !isExpanded ? filteredSkills.slice(0, 6) : filteredSkills

  // Get unique categories
  const categories = Object.values(CATEGORIES)

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
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My technical toolkit includes a diverse range of technologies that I've mastered to build modern, efficient,
            and scalable applications.
          </motion.p>
        </div>

        {/* Category filters */}
        <div className="category-filters">
          <motion.button
            className={`filter-button ${activeCategory === null ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="skill-item-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onMouseEnter={() => setHoveredSkill(skill.title)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon-container">
                    <img
                      src={skill.src}
                      alt={skill.title}
                      className="skill-icon"
                      onError={(e) => {
                        if (skill.title === "Express.js") {
                          e.target.src = "/placeholder.svg"; // Fallback for Express.js
                        }
                      }}
                    />
                  </div>

                  {/* Circular progress indicator */}
                  <svg className="progress-circle" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="36" className="progress-bg" />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      className="progress-fill"
                      style={{
                        stroke: `url(#gradient-${index})`,
                        strokeDasharray: `${2 * Math.PI * 36}`,
                        strokeDashoffset: `${2 * Math.PI * 36 * (1 - skill.proficiency / 100)}`,
                      }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={skill.category.lightColor} />
                        <stop offset="100%" stopColor={skill.category.darkColor} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <h3 className="skill-title">{skill.title}</h3>

                <Badge
                  style={{
                    background: skill.category.color,
                    color: "#fff",
                  }}
                >
                  {skill.category.name}
                </Badge>

                {/* Proficiency percentage */}
                <div className="skill-proficiency">{skill.proficiency}%</div>
              </div>

              {/* Tooltip on hover */}
              {hoveredSkill === skill.title && (
                <motion.div
                  className="skill-tooltip"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="tooltip-text">{skill.description}</p>
                  <div className="tooltip-arrow"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Expand/Collapse Button (only for mobile) */}
        {window.innerWidth <= 768 && filteredSkills.length > 6 && (
          <div className="expand-button-container">
            <motion.button
              className="expand-button"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </motion.button>
          </div>
        )}
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        /* General Styles */
        .skills-section {
          padding: 80px 0;
          background-color: #0A0A0A;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 16px;
          background: linear-gradient(to right, #a78bfa, #ec4899, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .title-underline {
          width: 96px;
          height: 4px;
          background: linear-gradient(to right, #a855f7, #ec4899);
          margin: 0 auto 32px;
        }

        .section-description {
          font-size: 18px;
          color: #d1d5db;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Category Filters */
        .category-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
        }

        .filter-button {
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 14px;
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

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          column-gap: 32px;
          row-gap: 32px;
        }

        .skill-item-wrapper {
          position: relative;
        }

        .skill-item {
          background-color: #1f2937;
          border-radius: 12px;
          padding: 24px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid #4B5563;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .skill-item:hover {
          border-color: #6b7280;
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
        }

        /* Skill Icon */
        .skill-icon-wrapper {
          position: relative;
          margin-bottom: 16px;
        }

        .skill-icon-container {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .skill-item:hover .skill-icon {
          transform: scale(1.1);
        }

        /* Progress Circle */
        .progress-circle {
          position: absolute;
          top: -8px;
          left: -8px;
          width: 80px;
          height: 80px;
          transform: rotate(-90deg);
        }

        .progress-bg {
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 4;
          fill: transparent;
        }

        .progress-fill {
          stroke-width: 4;
          fill: transparent;
          stroke-linecap: round;
        }

        /* Skill Title and Badge */
        .skill-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          padding: 2px 10px;
          font-size: 12px;
          font-weight: 500;
        }

        .skill-proficiency {
          margin-top: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #9ca3af;
        }

        /* Tooltip */
        .skill-tooltip {
          position: absolute;
          bottom: -64px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #1f2937;
          color: #fff;
          padding: 12px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 20;
          width: 192px;
          text-align: center;
        }

        .tooltip-text {
          font-size: 14px;
        }

        .tooltip-arrow {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid #1f2937;
        }

        /* Expand Button (only for mobile) */
        .expand-button-container {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }

        .expand-button {
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 14px;
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

        /* Responsive Styles */
        @media (min-width: 769px) {
          .skills-grid {
            grid-template-columns: repeat(5, minmax(220px, 1fr)); /* 5 columns for laptop */
            grid-template-rows: repeat(3, auto); /* Enforce 3 rows */
            column-gap: 32px;
            row-gap: 32px;
          }

          /* Ensure only 15 items fit (3 rows x 5 columns) */
          .skills-grid > :nth-child(n + 16) {
            display: none; /* Hide items beyond the 15th to enforce 3 rows */
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .skills-grid {
            grid-template-columns: repeat(5, minmax(200px, 1fr));
            grid-template-rows: repeat(3, auto);
            column-gap: 24px;
            row-gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 28px;
          }
          
          .section-description {
            font-size: 16px;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            column-gap: 16px;
            row-gap: 16px;
          }
          
          .skill-icon {
            width: 40px;
            height: 40px;
          }
          
          .skill-title {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
            column-gap: 12px;
            row-gap: 12px;
          }
          
          .skill-item {
            padding: 16px;
            min-height: 180px;
          }
        }
      `}</style>
    </section>
  )
}

export default SkillsSection
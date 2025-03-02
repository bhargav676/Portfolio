import React from "react";

const SkillsAndServices = () => {
    const skills = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", title: "React.js" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", title: "Node.js" },
        { src: "", title: "Express.js", isText: true },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", title: "MongoDB" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", title: "HTML" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", title: "CSS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", title: "Tailwind" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", title: "JavaScript" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", title: "C" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", title: "C++" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", title: "Python" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", title: "GitHub" }
    ];

    return (
        <section id="skills">
        <div className="skills-container">
            <h1 className="skills-title">Skills & Tech Stack</h1><br/><br/>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        {skill.isText ? (
                            <div className="express-text">Ex</div>
                        ) : (
                            <img src={skill.src} alt={skill.title} className="skill-icon" />
                        )}
                        <h3 className="skill-name">{skill.title}</h3>
                    </div>
                ))}
            </div>
            <style>
                {`
                    .skills-container {
                        text-align: center;
                        padding: 50px;
                        background: black;
                        color: #fff;
                        font-family: Arial, sans-serif;
                    }
                    .skills-title {
                        font-size: 36px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .skills-grid {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        gap: 30px;
                        max-width: 900px;
                        margin: auto;
                    }
                    .skill-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 10px;
                        transition: 0.3s;
                    }
                    .skill-icon {
                        width: 50px;
                        height: 50px;
                        margin-bottom: 10px;
                    }
                    .express-text {
                        font-size: 24px;
                        font-weight: bold;
                        color: white;
                        background: black;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    .skill-name {
                        font-size: 18px;
                    }
                    @media (max-width: 1024px) {
                        .skills-grid {
                            grid-template-columns: repeat(4, 1fr);
                        }
                    }
                    @media (max-width: 768px) {
                        .skills-container {
                            padding: 30px;
                        }
                        .skills-title {
                            font-size: 28px;
                        }
                        .skills-grid {
                            grid-template-columns: repeat(3, 1fr);
                            gap: 15px;
                        }
                        .skill-icon {
                            width: 40px;
                            height: 40px;
                        }
                        .skill-name {
                            font-size: 14px;
                        }
                    }
                    @media (max-width: 480px) {
                        .skills-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                `}
            </style>
        </div>
        </section>
    );
};

export default SkillsAndServices;

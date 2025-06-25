import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import RotatingCircle from "./Rotatingcircle";
import Particles from '../components/Particles';

const Portfolio = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isWorkHovered, setIsWorkHovered] = useState(false);
    // Removed the state for the resume button

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const accentColor = '#81e6d9'; 
    const accentColorShadow = 'rgba(129, 230, 217, 0.4)'; 

    const styles = {
        container: {
            fontFamily: "Arial, sans-serif",
            background: "transparent",
            color: "#fff",
            padding: "20px",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            textAlign: isSmallScreen ? "center" : "left",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
        },
        rotate: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: isSmallScreen ? "center" : "flex-start",
            width: "100%",
            maxWidth: "1200px",
            flexDirection: isSmallScreen ? "column" : "row",
            gap: isSmallScreen ? "30px" : "30px",
            position: "relative",
            zIndex: 2,
        },
        name: {
            width: isSmallScreen ? "100%" : "60%",
            minWidth: "250px",
            marginTop: isSmallScreen ? "60px" : "50px",
            marginLeft: isSmallScreen ? "0" : "30px",
            maxWidth: isSmallScreen ? "100%" : "700px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isSmallScreen ? 'center' : 'flex-start'
        },
        header: {
            fontSize: isSmallScreen ? "38px" : "52px",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "10px",
            zIndex: 3,
            animation: "fadeInScale 1.5s ease-in-out",
        },
        typewriter: {
            fontSize: isSmallScreen ? "24px" : "32px",
            color: accentColor,
            fontWeight: 'bold',
            marginBottom: '25px',
            height: isSmallScreen ? '60px' : '40px',
        },
        content: {
            fontSize: isSmallScreen ? "16px" : "18px",
            color: "#b0b0b0",
            lineHeight: "1.7",
            maxWidth: isSmallScreen ? "90%" : "600px",
            zIndex: 3,
            marginBottom: '35px',
        },
        ctaContainer: {
            display: 'flex',
            marginTop: '10px',
            // No longer needs gap or different flex-directions
            justifyContent: isSmallScreen ? 'center' : 'flex-start'
        },
        ctaButton: {
            padding: '12px 28px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#1A202C',
            backgroundColor: accentColor,
            border: `2px solid ${accentColor}`,
            borderRadius: '50px',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: isWorkHovered ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: isWorkHovered ? `0 4px 15px ${accentColorShadow}` : 'none',
        },
        // Removed ctaButtonOutline style
        rotatingCircleContainer: {
            width: isSmallScreen ? "100%" : "30%",
            minWidth: "250px",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: isSmallScreen ? "0" : "20px",
            marginTop: isSmallScreen ? "0" : "50px",
        },
        particlesBackground: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "black",
            zIndex: 0,
            overflow: "hidden",
        },
    };

    return (
        <section id="home">
            <div style={styles.container}>
                <div style={styles.particlesBackground}>
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={200}
                        particleSpread={15}
                        speed={0.2} // <-- PARTICLE SPEED IS NOW SLOWER
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div style={styles.rotate}>
                    <div style={styles.name}>
                        <div style={styles.header}>K Bhargava Prasad</div>
                        <TypeAnimation
                            sequence={[
                                'A Full-Stack Developer', 1500,
                                'A MERN Stack Specialist', 1500,
                                'A Backend Architect', 1500,
                                'A Problem Solver', 1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={styles.typewriter}
                            repeat={Infinity}
                        />
                        <p style={styles.content}>
                            "I transform innovative ideas into intelligent, scalable solutions by combining
                             IoT technology with modern web development. Specializing in the MERN stack and 
                             real-time systems, I build robust, user-friendly applications that connect the 
                             physical and digital worlds seamlessly—from concept to deployment.
                        </p>
                        <div style={styles.ctaContainer}>
                            <a 
                                href="#project" 
                                style={styles.ctaButton}
                                onMouseEnter={() => setIsWorkHovered(true)}
                                onMouseLeave={() => setIsWorkHovered(false)}
                            >
                                View My Work
                            </a>
                        
                        </div>
                    </div>
                    <div style={styles.rotatingCircleContainer}>
                        <RotatingCircle />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
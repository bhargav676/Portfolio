import React, { useState, useEffect } from "react";
import RotatingCircle from "./Rotatingcircle";
import Particles from '../components/Particles';

const Portfolio = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
            marginTop: isSmallScreen ? "100px" : "50px", 
            marginLeft: isSmallScreen ? "0" : "30px",
            maxWidth: isSmallScreen ? "100%" : "700px",
        },
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
        header: {
            fontSize: isSmallScreen ? "28px" : "36px", // Increased size (was 20px/24px)
            fontWeight: "bold",
            color: "#fffff",
            marginBottom: "20px",
            marginTop: isSmallScreen ? "10px" : "20px",
            zIndex: 3,
            animation: "fadeInScale 1.5s ease-in-out", // Animation added
        },
        content: {
            fontSize: isSmallScreen ? "14px" : "16px",
            color: "grey",
            lineHeight: "1.6",
            maxWidth: isSmallScreen ? "90%" : "600px",
            marginLeft: "10px",
            zIndex: 3,
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
                    speed={0.5}
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
                    <div style={styles.content}>
                        <p>I am a Full stack Developer in Mern stack</p>
                        <p>
                            Welcome to my portfolio! I hope you enjoy your visit. I specialize in
                            Back-End development with Node.js and Front-End development with React.js.
                            I have worked on various projects, including a Real Link-Shortener,
                            E-Commerce APIs, React-based Website Design and Development, and more.
                        </p>
                        <p>
                            I am passionate about learning new technologies and building solutions that
                            make a difference. Thank you for visiting my portfolio! I hope you like my
                            work. Happy coding!
                        </p>
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
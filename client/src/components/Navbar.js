import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.style.opacity = 1;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <nav style={styles.navbar} className="navbar">
      <div style={styles.logo}> </div>
      {isMobile ? (
        <>
          <div style={styles.mobileMenu} onClick={toggleMenu}>
            ☰
          </div>
          <div style={{
            ...styles.sidebar,
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)'
          }}>
            <div style={styles.closeButton} onClick={closeMenu}>
              ✕
            </div>
            <ul style={styles.sidebarLinks}>
              <li style={styles.sidebarItem} 
              onClick={() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}>Home</li>
              <li style={styles.sidebarItem} 
              onClick={() => {
                document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}>Projects</li>
              <li style={styles.sidebarItem} 
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}>About</li>
              <li style={styles.sidebarItem} onClick={() => {
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              closeMenu();
            }}>Skills</li>
              <li 
              style={styles.sidebarItem} 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
              }}>Contact</li>
            </ul>
          </div>
        </>
      ) : (
        <ul style={styles.navLinks}>
          <li style={styles.linkItem} onClick={() => {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}>Home</li>
          <li style={styles.linkItem} onClick={() => {
              document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
            }}>Projects</li>
          <li style={styles.linkItem} onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }} >About</li>
          <li
            style={styles.linkItem} onClick={() => {
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Skills
          </li>

          <li style={styles.linkItem} onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "transparent",
    borderRadius: "100px",
    position: "fixed",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "20px",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(10px)",
    boxShadow: "0px 2px 1px rgb(253, 249, 249)",
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    color: "#fff",
    cursor: "pointer",
  },
  linkItem: {
    position: "relative",
    padding: "5px 10px",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  mobileMenu: {
    fontSize: "1.5rem",
    color: "#fff",
    cursor: "pointer",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "250px",
    background: "rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(5px)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 1001,
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "1.5rem",
    color: "#fff",
    cursor: "pointer",
    padding: "5px",
  },
  sidebarLinks: {
    listStyle: "none",
    padding: "20px",
    marginTop: "60px",
    color: "#fff",
  },
  sidebarItem: {
    padding: "15px 0",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
};

// Responsive styles injection
const responsiveStyles = `
  @media (max-width: 768px) {
    .navbar {
      width: 85%;
      margin-left: 10px;
      transform: none;
      left: 0;
    }
  }

  @media (max-width: 500px) {
    .navbar {
      width: 80%;
      margin-left: 10px;
    }
  }

  @media (max-width: 400px) {
    .navbar {
      width: 75%;
      margin-left: 10px;
    }
  }

  @media (max-width: 300px) {
    .navbar {
      width: 70%;
      margin-left: 10px;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default Navbar; 
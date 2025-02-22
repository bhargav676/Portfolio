import React, { useEffect, useRef, useState } from 'react';

const RotatingCircle = () => {
  const circleRef1 = useRef(null); // Ref for the first circle
  const circleRef2 = useRef(null); // Ref for the second circle
  const [containerSize, setContainerSize] = useState(0); // Dynamic container size based on screen width

  // Update container size based on viewport width
  const updateContainerSize = () => {
    const viewportWidth = window.innerWidth;
    // Use 60% of viewport width for screens below 500px, 80% above, with min 80px and max 360px
    const scaleFactor = viewportWidth < 500 ? 0.6 : 0.8;
    const newSize = Math.max(80, Math.min(viewportWidth * scaleFactor, 360));
    setContainerSize(newSize);
  };

  useEffect(() => {
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);

  useEffect(() => {
    const circle1 = circleRef1.current;
    const circle2 = circleRef2.current;
    let rotation1 = 0;
    let rotation2 = 0;

    const rotateCircles = () => {
      rotation1 = (rotation1 + 1) % 360;
      circle1.style.transform = `rotate(${rotation1}deg)`;
      rotation2 = (rotation2 - 1) % 360;
      circle2.style.transform = `rotate(${rotation2}deg)`;
      requestAnimationFrame(rotateCircles);
    };

    rotateCircles();
  }, []);

  const icons = [
    { name: 'Node.js', url: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'Express', text: 'EX' },
    { name: 'MongoDB', url: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'JavaScript', url: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    { name: 'React', url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'HTML', url: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS', url: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'Tailwind CSS', url: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
  ];

  // Calculate radii dynamically based on container size
  const radius2 = containerSize / 2; // Outer circle takes full container width
  const radius1 = radius2 * 0.6; // Inner circle is 60% of outer circle
  const isSmallScreen = containerSize < 180; // Adjusted threshold for smaller screens

  return (
    <div
      style={{
        position: 'relative',
        width: `${containerSize}px`,
        height: `${containerSize}px`,
        maxWidth: '100%', // Prevent overflow on small screens
      }}
    >
      {/* First Circle */}
      <div
        ref={circleRef1}
        style={{
          width: `${radius1 * 2}px`,
          height: `${radius1 * 2}px`,
          borderRadius: '50%',
          border: '1px solid grey',
          position: 'absolute',
          top: `${radius2 - radius1}px`,
          left: `${radius2 - radius1}px`,
        }}
      >
        {icons.map((icon, index) => {
          const angle = (360 / icons.length) * index;
          const radians = (angle * Math.PI) / 180;
          const iconSize = isSmallScreen ? 14 : Math.min(40, containerSize * 0.1); // Smaller icons for small screens
          const x = radius1 + radius1 * Math.cos(radians) - iconSize / 2;
          const y = radius1 + radius1 * Math.sin(radians) - iconSize / 2;

          return (
            <div
              key={`circle1-${icon.name}`}
              style={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${-angle}deg)`,
              }}
            >
              {icon.url ? (
                <img src={icon.url} alt={icon.name} style={{ width: '100%', height: '100%' }} />
              ) : (
                <span
                  style={{
                    fontSize: `${iconSize * 0.6}px`, // Scale text with icon size
                    fontWeight: 'normal',
                  }}
                >
                  {icon.text}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Second Circle */}
      <div
        ref={circleRef2}
        style={{
          width: `${radius2 * 2}px`,
          height: `${radius2 * 2}px`,
          borderRadius: '50%',
          border: '1px solid grey',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        {icons.map((icon, index) => {
          const angle = (360 / icons.length) * index;
          const radians = (angle * Math.PI) / 180;
          const iconSize = isSmallScreen ? 14 : Math.min(40, containerSize * 0.1); // Smaller icons for small screens
          const x = radius2 + radius2 * Math.cos(radians) - iconSize / 2;
          const y = radius2 + radius2 * Math.sin(radians) - iconSize / 2;

          return (
            <div
              key={`circle2-${icon.name}`}
              style={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${-angle}deg)`,
              }}
            >
              {icon.url ? (
                <img src={icon.url} alt={icon.name} style={{ width: '100%', height: '100%' }} />
              ) : (
                <span
                  style={{
                    fontSize: `${iconSize * 0.6}px`, // Scale text with icon size
                    fontWeight: 'normal',
                  }}
                >
                  {icon.text}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Centered "Skills" Text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize: `${Math.min(36, containerSize * 0.12)}px`, // Scale font size dynamically
          fontWeight: 'bold',
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
        }}
      >
        Skills
      </div>
    </div>
  );
};

export default RotatingCircle;
import React from 'react';
import styled from 'styled-components';
import p from '../images/profile.jpg';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

// --- Styled Components Definition (No changes needed for components above the timeline) ---

const Container = styled.div`
  background-color: #000000;
  min-height: 100vh;
  padding: 50px 40px;
  color: #ffffff;
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }
`;

const ImageColumn = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageFrame = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  
  @media (max-width: 992px) {
    width: 250px;
    height: 375px;
  }
`;

const FrameShadow = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background-color: #f2295a;
  z-index: -1;
`;

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #000000;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    align-items: center;
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #81e6d9;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #e0e0e0;
  margin-bottom: 30px;
`;

const JourneyTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// --- FINAL CORRECTED TIMELINE STYLES ---

const TimelineContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 40px;
  padding: 10px 0;
  width: 100%;
  
  /* Horizontal line for desktop */
  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 12.5%;
    width: 75%;
    height: 2px;
    background-color: #555;
    z-index: 1;
  }

  @media (max-width: 992px) {
    width: 90%;
  }

  /* Vertical timeline for mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    gap: 40px; /* Increase gap for better spacing */
    
    /* Remove the horizontal line on mobile */
    &::before {
      display: none;
    }
  }
`;

// We no longer need a dedicated TimelineLine component

const TimelineItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 0 10px;

  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
    padding-left: 55px; /* Create space for the icon and line */
    width: 100%;
    
    /* This pseudo-element is the vertical line segment */
    &:not(:last-child)::before {
      content: '';
      position: absolute;
      width: 2px;
      background-color: #555;
      /* Position the line to connect icons */
      left: 19px; /* (Icon width / 2) - (Line width / 2) */
      top: 40px; /* Start below the icon */
      bottom: -40px; /* Extend down into the gap */
    }
  }
`;

const TimelineIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000000;
  border: 2px solid #888;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  color: #e0e0e0;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3; /* Ensure icon is on top of the line segment */
    margin-bottom: 0;
  }
`;

const TimelineTitle = styled.div`
  font-weight: bold;
  color: #81e6d9;
  font-size: 1rem;
  margin-bottom: 5px;
`;

const TimelineSubtitle = styled.div`
  font-size: 0.9rem;
  color: #d3d3d3;
  margin-bottom: 5px;
  min-height: 1.2em;
`;

const TimelineDate = styled.div`
  font-size: 0.8rem;
  color: #888;
`;


// --- The React Component ---
const AboutUs = () => {
  const timelineData = [
    { icon: <FaGraduationCap size={18}/>, title: 'Gayatri Vidya Parishad College', subtitle: 'B.Tech in ECE', date: '2022 – 2026' },
    { icon: <FaGraduationCap size={18}/>, title: 'MERN Stack Development', subtitle: 'Self-Paced Learning', date: '2023 - 2024' },
    { icon: <FaBriefcase size={18}/>, title: 'ANTAR IoT Private Limited', subtitle: 'IoT Full Stack Intern', date: 'Apr 2025 – Jun 2025' },
    { icon: <FaBriefcase size={18}/>, title: 'Data Structures & Algos (C++)', subtitle: 'Continuous Learning', date: '2024 - present' },
  ];

  return (
    <Container id="about">
      <ContentWrapper>
        <ImageColumn>
          <ImageFrame>
            <FrameShadow />
            <ImageBox>
              <ProfileImage src={p} alt="Profile" />
            </ImageBox>
          </ImageFrame>
        </ImageColumn>
        <TextColumn>
          <Heading>About Me</Heading>
          <Paragraph>
           Hi, I’m Kagitala Bhargava Prasad, a developer passionate about building impactful solutions that blend IoT, web development, and embedded systems.

I specialize in full-stack and IoT-based projects, combining hardware and software to solve real-world problems. Always learning through hands-on experience, I’m seeking remote or onsite roles where I can grow and contribute to innovative, tech-driven teams.
          </Paragraph>
          <JourneyTitle>My Journey</JourneyTitle>
          {/* Note: The <TimelineLine /> component is removed */}
          <TimelineContainer>
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineIconContainer>{item.icon}</TimelineIconContainer>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                <TimelineDate>{item.date}</TimelineDate>
              </TimelineItem>
            ))}
          </TimelineContainer>
        </TextColumn>
      </ContentWrapper>
    </Container>
  );
};

export default AboutUs;
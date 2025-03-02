import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/Aboutus'
import ContactUs from './components/Contactus'
import SkillsAndServices from './components/Skills'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <SkillsAndServices/>
      <ContactUs/>
    </div>
  )
}
export default App
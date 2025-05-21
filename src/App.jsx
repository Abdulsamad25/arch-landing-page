import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroBg from './Pages/HeroBg'
import HeroSection from './Pages/HeroSection'
import Testimonials from './Pages/Testimonials'
import Portfolio from './Pages/Portfolio'
import ModernVilla from './Pages/ModernVilla' 
import LakeHouse from './Pages/LakeHouse'
import UrbanLoft from './Pages/UrbanLoft'
import ClassicEstate from './Pages/ClassicEstate'
import MountainCabin from './Pages/MountainCabin'
import BeachfrontHome from './Pages/BeachfrontHome'
import FamilyResidence from './Pages/FamilyResidence'
import MinimalistHome from './Pages/MinimalistHome'
import CountryHouse from './Pages/CountryHouse'
import AboutBg from './Pages/AboutBg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'

// Scroll handler component
function ScrollToSectionOnNavigate() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  return null;
}

const App = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <Router>
      <ScrollToSectionOnNavigate />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBg />
              <HeroSection />
              <Testimonials />
              <Portfolio />
              <AboutBg />
              <Contact />
              {/* <AboutUs/> */}
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/modern-villa" element={<ModernVilla />} />
        <Route path="/portfolio/lake-house" element={<LakeHouse />} />
        <Route path="/portfolio/urban-loft" element={<UrbanLoft />} />
        <Route path="/portfolio/classic-estate" element={<ClassicEstate />} />
        <Route path="/portfolio/mountain-cabin" element={<MountainCabin />} />
        <Route path="/portfolio/beachfront-home" element={<BeachfrontHome />} />
        <Route path="/portfolio/family-residence" element={<FamilyResidence />} />
        <Route path="/portfolio/minimalist-home" element={<MinimalistHome />} />
        <Route path="/portfolio/country-house" element={<CountryHouse />} />
      </Routes>
    </Router>
  )
}

export default App
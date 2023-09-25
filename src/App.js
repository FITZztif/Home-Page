import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import AboutUsSection from './components/AboutUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import "./App.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
      <Router>
        <div className="app-container">
          <NavBar />
          <HeroSection />
          <KeyFeaturesSection />
          <AboutUsSection />
          <TestimonialsSection />
          <Footer />
        </div>
      </Router>
  );
}

export default App;

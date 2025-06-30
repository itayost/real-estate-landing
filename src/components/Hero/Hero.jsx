import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  // Background images for slideshow
  const backgroundImages = [
    '/hero-bg-1.jpg', // החלף עם התמונות שלך
    '/hero-bg-2.jpg',
    '/hero-bg-3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Scroll to properties section
  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Images */}
      <div className="hero-backgrounds">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Subtle Overlay */}
      <div className="hero-overlay"></div>

      {/* Minimal Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-minimal">
            <div className="company-name fade-in">T.A. נכסים</div>

            <h1 className="hero-title fade-in">
              הבית החדש שלכם
              <span className="hero-title-accent"> מתחיל כאן</span>
            </h1>

            <p className="hero-tagline slide-in-up">ליווי מקצועי ואישי בדרך לבית המושלם</p>

            <div className="hero-cta fade-in">
              <button className="btn btn-primary btn-lg" onClick={scrollToProperties}>
                <FaSearch />
                חיפוש נכסים
              </button>
              <button className="btn btn-glass btn-lg" onClick={scrollToContact}>
                בואו נדבר
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;

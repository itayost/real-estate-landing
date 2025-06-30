import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp, FaArrowUp, FaPhone } from 'react-icons/fa';

function App() {
  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.querySelector('.scroll-to-top');
      if (scrollToTopBtn) {
        if (window.scrollY > 300) {
          scrollToTopBtn.classList.add('visible');
        } else {
          scrollToTopBtn.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      {/* Header - Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="section bg-pattern">
        <div className="container">
          <div className="section-title">
            <h3>הכירו את הסוכן שילווה אתכם בדרך לבית החדש</h3>
          </div>
          <About />
        </div>
      </section>

      {/* Properties/Transactions Section */}
      <section id="properties" className="section">
        <div className="container">
          <div className="section-title">
            <h2>הצלחות מדברות</h2>
          </div>
          <Properties />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-pattern">
        <div className="container">
          <div className="section-title">
            <h2>המלצות לקוחות</h2>
            <p className="section-subtitle">מה אומרים הלקוחות שלנו</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-title">
            <h2>צור קשר</h2>
            <p className="section-subtitle">
              נשמח לענות על כל שאלה ולסייע במציאת הנכס המושלם עבורכם
            </p>
          </div>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Buttons */}
      <div className="floating-contacts">
        <a href="tel:050-123-4567" className="floating-btn phone" aria-label="התקשר">
          <FaPhone />
        </a>
        <a
          href="https://wa.me/972501234567?text=שלום, אשמח לקבל מידע נוסף"
          className="floating-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="גלול למעלה">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { id: 'home', label: 'בית' },
    { id: 'about', label: 'אודות' },
    { id: 'properties', label: 'נכסים' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to sections
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isMenuOpen &&
        !event.target.closest('.nav-menu') &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <div className="logo" onClick={() => scrollToSection('home')}>
              <img src="/nadlan.png" alt="נדל״ן פרימיום" className="logo-img" />
            </div>

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <ul className="nav-menu desktop-menu">
                {navItems.map(item => (
                  <li key={item.id} className="nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={e => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Desktop Actions */}
              <div className="header-actions">
                <a href="tel:050-123-4567" className="action-phone">
                  <FaPhone />
                  <span>050-123-4567</span>
                </a>
                <a
                  href="https://wa.me/972501234567?text=שלום, אשמח לקבל ייעוץ בנושא נדל״ן"
                  className="btn btn-header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-menu mobile-nav-menu">
          {navItems.map(item => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-item mobile-cta">
            <a href="tel:050-123-4567" className="mobile-phone">
              <FaPhone />
              <span>050-123-4567</span>
            </a>
            <a
              href="https://wa.me/972501234567?text=שלום, אשמח לקבל ייעוץ בנושא נדל״ן"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;

import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaClock,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-company">
            <h3 className="footer-logo">T.A. נכסים</h3>
            <p className="footer-description">
              הבית שלכם הוא החלום שלנו. אנו מתמחים במתן שירותי נדל"ן מקצועיים ואמינים באזור גוש דן,
              עם ניסיון של מעל 15 שנה בתחום.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="WhatsApp" className="social-link">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section footer-links">
            <h4 className="footer-title">קישורים מהירים</h4>
            <ul className="footer-nav">
              <li>
                <a href="#home">דף הבית</a>
              </li>
              <li>
                <a href="#about">אודות</a>
              </li>
              <li>
                <a href="#services">שירותים</a>
              </li>
              <li>
                <a href="#properties">נכסים</a>
              </li>
              <li>
                <a href="#testimonials">המלצות</a>
              </li>
              <li>
                <a href="#contact">צור קשר</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section footer-services">
            <h4 className="footer-title">השירותים שלנו</h4>
            <ul className="footer-service-list">
              <li>מכירת נכסים</li>
              <li>השכרת נכסים</li>
              <li>ייעוץ נדל"ן</li>
              <li>הערכת שווי נכס</li>
              <li>ליווי משפטי</li>
              <li>השקעות נדל"ן</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section footer-contact">
            <h4 className="footer-title">צור קשר</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+972501234567">050-123-4567</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info@ta-properties.co.il">info@ta-properties.co.il</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>רחוב הרצל 15, רמת גן</span>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span>א׳-ה׳: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© {currentYear} T.A. נכסים. כל הזכויות שמורות.</p>
            <div className="footer-bottom-links">
              <a href="#">תנאי שימוש</a>
              <span className="separator">|</span>
              <a href="#">מדיניות פרטיות</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

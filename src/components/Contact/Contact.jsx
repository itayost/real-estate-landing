import React, { useState } from 'react';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaHome,
  FaComment,
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faElevator } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Contact information
  const contactInfo = {
    phone: '050-123-4567',
    whatsapp: '972501234567',
    email: 'tal@realestate.co.il',
    address: 'רחוב הרצל 100, רמת גן',
    hours: {
      weekdays: 'ראשון - חמישי: 9:00 - 19:00',
      friday: 'יום שישי: 9:00 - 14:00',
      saturday: 'שבת: סגור',
    },
  };

  // Social media links
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'שם מלא הוא שדה חובה';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'מספר טלפון הוא שדה חובה';
    } else if (!/^05\d{8}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'אנא בחר סוג נכס';
    }

    return newErrors;
  };

  // Handle input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    // Validate
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'תודה על פנייתך! נחזור אליך בהקדם האפשרי.',
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        propertyType: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'אירעה שגיאה בשליחת הטופס. אנא נסו שנית.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <h3>השאירו פרטים ונחזור אליכם</h3>
            <p>מלאו את הטופס או התקשרו אלינו ישירות</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <FaUser />
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? 'error' : ''}`}
                placeholder="ישראל ישראלי"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <FaPhone />
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-control ${errors.phone ? 'error' : ''}`}
                placeholder="050-1234567"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FaEnvelope />
                אימייל (אופציונלי)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'error' : ''}`}
                placeholder="israel@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {/* Property Type Field */}
            <div className="form-group">
              <label htmlFor="propertyType" className="form-label">
                <FaHome />
                סוג הנכס המבוקש
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={`form-control ${errors.propertyType ? 'error' : ''}`}
              >
                <option value="">בחר סוג נכס</option>
                <option value="apartment">דירה</option>
                <option value="house">בית פרטי</option>
                <option value="penthouse">פנטהאוז</option>
                <option value="garden">דירת גן</option>
                <option value="investment">נכס להשקעה</option>
                <option value="commercial">נכס מסחרי</option>
                <option value="other">אחר</option>
              </select>
              {errors.propertyType && <span className="error-message">{errors.propertyType}</span>}
            </div>

            {/* Message Field */}
            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">
                <FaComment />
                הודעה (אופציונלי)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="ספרו לנו מה אתם מחפשים..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  שולח...
                </>
              ) : (
                'שלח פנייה'
              )}
            </button>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.type === 'success' && <FaCheckCircle />}
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          {/* Quick Contact Icons */}
          <div className="contact-card">
            <h4>דרכי יצירת קשר</h4>
            <div className="contact-circles-grid">
              <div className="contact-circle-item">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="contact-circle-btn"
                  aria-label="טלפון"
                >
                  <FaPhone />
                </a>
                <span className="contact-circle-label">טלפון</span>
                <span className="contact-circle-info">{contactInfo.phone}</span>
              </div>

              <div className="contact-circle-item">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=שלום, אשמח לקבל פרטים נוספים`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-circle-btn whatsapp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <span className="contact-circle-label">WhatsApp</span>
                <span className="contact-circle-info">שלח הודעה</span>
              </div>

              <div className="contact-circle-item">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="contact-circle-btn"
                  aria-label="אימייל"
                >
                  <FaEnvelope />
                </a>
                <span className="contact-circle-label">אימייל</span>
                <span className="contact-circle-info">{contactInfo.email}</span>
              </div>

              <div className="contact-circle-item">
                <a
                  href="https://maps.google.com/?q=רחוב הרצל 100 רמת גן"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-circle-btn"
                  aria-label="מיקום"
                >
                  <FaMapMarkerAlt />
                </a>
                <span className="contact-circle-label">מיקום</span>
                <span className="contact-circle-info">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="contact-card">
            <h4>שעות פעילות</h4>
            <div className="hours-list">
              <div className="hours-item">
                <FaClock className="hours-icon" />
                <div className="hours-details">
                  <p>{contactInfo.hours.weekdays}</p>
                  <p>{contactInfo.hours.friday}</p>
                  <p>{contactInfo.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="contact-card">
            <h4>עקבו אחרינו</h4>
            <div className="social-circles-grid">
              {socialLinks.map((social, index) => (
                <div key={index} className="social-circle-item">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                  <span className="social-circle-label">{social.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

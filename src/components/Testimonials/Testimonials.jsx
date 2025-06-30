import React, { useState, useEffect } from 'react';
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaHandshake,
  FaHeart,
} from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'משפחת כהן',
      location: 'רמת גן',
      rating: 5,
      text: 'טל ליווה אותנו בתהליך מכירת הדירה הישנה ורכישת הבית החדש. המקצועיות, הסבלנות והיחס האישי שקיבלנו היו יוצאים מן הכלל. הוא דאג לכל פרט ופרט, ממש כאילו היה קונה את הבית בעצמו. תודה על הכל!',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150',
      transaction: 'מכירה ורכישה',
      highlight: 'המקצועיות והיחס האישי היו יוצאים מן הכלל',
    },
    {
      id: 2,
      name: 'דני ומיכל לוי',
      location: 'תל אביב',
      rating: 5,
      text: 'כזוג צעיר שרוכש דירה ראשונה, היינו מלאי חששות ושאלות. טל הפך את כל התהליך לפשוט וברור. הוא היה זמין 24/7, ענה על כל שאלה בסבלנות והצליח להשיג לנו מחיר מעולה. ממליצים בחום!',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150',
      transaction: 'רכישת דירה ראשונה',
      highlight: 'הפך את התהליך לפשוט וברור',
    },
    {
      id: 3,
      name: 'ד"ר אילנה רוזנברג',
      location: 'הרצליה',
      rating: 5,
      text: 'חיפשתי סוכן שיבין בדיוק מה אני מחפשת ולא יבזבז לי זמן. טל הציג לי רק נכסים רלוונטיים, ניהל משא ומתן מבריק והצליח להוריד את המחיר ב-15%. מקצוען אמיתי!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      transaction: 'רכישת נכס להשקעה',
      highlight: 'ניהל משא ומתן מבריק והוריד 15% מהמחיר',
    },
    {
      id: 4,
      name: 'משפחת אברהמי',
      location: 'ראשון לציון',
      rating: 5,
      text: 'מכרנו את הדירה תוך שבועיים בלבד ובמחיר מעל המבוקש! טל השתמש בכל הכלים השיווקיים האפשריים, הביא המון מתעניינים רציניים וליווה אותנו עד לחתימה. פשוט מדהים!',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=150',
      transaction: 'מכירת דירה',
      highlight: 'מכרנו תוך שבועיים במחיר מעל המבוקש!',
    },
    {
      id: 5,
      name: 'עו"ד יוסי ברנר',
      location: 'רעננה',
      rating: 5,
      text: 'זו הפעם השלישית שאני עובד עם טל, וכל פעם אני מתרשם מחדש. היושרה, המקצועיות והידע המעמיק שלו בשוק הנדל"ן הם נדירים. אין לי ספק שאמשיך לעבוד איתו גם בעתיד.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      transaction: 'מספר עסקאות',
      highlight: 'היושרה והמקצועיות הם נדירים',
    },
    {
      id: 6,
      name: 'שירה ועמית גולן',
      location: 'פתח תקווה',
      rating: 5,
      text: 'טל הוא לא רק סוכן נדל"ן, הוא יועץ אמיתי. הוא עזר לנו להבין את השוק, ליווה אותנו בכל שלב והפך את החוויה המלחיצה של קניית בית לחוויה מהנה. תודה רבה על הכל!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      transaction: 'רכישת בית',
      highlight: 'הפך חוויה מלחיצה לחוויה מהנה',
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Navigation functions
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = index => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Get visible testimonials for desktop view (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  // Render stars
  const renderStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < rating ? 'star-filled' : 'star-empty'} />
    ));
  };

  return (
    <div className="testimonials-container">
      {/* Background Pattern */}
      <div className="testimonials-pattern"></div>

      {/* Stats Section */}
      <div className="testimonials-stats">
        <div className="stat-card fade-in">
          <FaHome className="stat-icon" />
          <div className="stat-content">
            <div className="stat-number">500+</div>
            <div className="stat-label">עסקאות מוצלחות</div>
          </div>
        </div>
        <div className="stat-card fade-in" style={{ animationDelay: '0.2s' }}>
          <FaHandshake className="stat-icon" />
          <div className="stat-content">
            <div className="stat-number">98%</div>
            <div className="stat-label">לקוחות ממליצים</div>
          </div>
        </div>
        <div className="stat-card fade-in" style={{ animationDelay: '0.4s' }}>
          <FaHeart className="stat-icon" />
          <div className="stat-content">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">דירוג ממוצע</div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="testimonials-carousel">
        {/* Navigation Buttons */}
        <button
          className="carousel-nav carousel-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous testimonial"
        >
          <FaChevronRight />
        </button>

        <button
          className="carousel-nav carousel-nav-next"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <FaChevronLeft />
        </button>

        {/* Testimonials Track */}
        <div className="testimonials-track">
          {/* Desktop View - 3 cards */}
          <div className="testimonials-desktop">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === 1 ? 'center' : ''}`}
              >
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>

                {/* Rating */}
                <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>

                {/* Text */}
                <p className="testimonial-text">{testimonial.text}</p>

                {/* Highlight */}
                <div className="testimonial-highlight">"{testimonial.highlight}"</div>

                {/* Author */}
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-details">
                      {testimonial.location} • {testimonial.transaction}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="testimonials-mobile">
            <div className="testimonial-card center">
              <div className="testimonial-quote">
                <FaQuoteLeft />
              </div>

              {/* Rating */}
              <div className="testimonial-rating">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Text */}
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>

              {/* Highlight */}
              <div className="testimonial-highlight">"{testimonials[currentIndex].highlight}"</div>

              {/* Author */}
              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-details">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].transaction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="testimonials-cta">
        <h3>רוצים להצטרף למשפחת הלקוחות המרוצים שלנו?</h3>
        <p>צרו קשר עוד היום ותתחילו את המסע לבית החדש שלכם</p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          בואו נתחיל
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

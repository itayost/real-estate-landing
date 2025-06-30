import React from 'react';
import {
  FaHome,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaUserTie,
  FaAward,
  FaClock,
  FaMapMarkedAlt,
  FaKey,
  FaFileContract,
  FaCalculator,
  FaBuilding,
  FaCheckCircle,
  FaStar,
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaHome />, number: '300+', label: 'נכסים נמכרו' },
    { icon: <FaHandshake />, number: '850+', label: 'לקוחות מרוצים' },
    { icon: <FaAward />, number: '10', label: 'שנות ניסיון' },
    { icon: <FaStar />, number: '5.0', label: 'דירוג ממוצע' },
  ];

  const services = [
    {
      icon: <FaKey />,
      title: 'מכירת נכסים',
      description: 'ליווי מקצועי בתהליך מכירת הנכס שלכם',
      features: ['הערכת שווי מדויקת', 'שיווק ממוקד', 'ליווי עד לסגירה'],
    },
    {
      icon: <FaHome />,
      title: 'רכישת נכסים',
      description: 'איתור הנכס המושלם עבורכם',
      features: ['התאמה אישית', 'סיורים מתואמים', 'ייעוץ מקצועי'],
    },
    {
      icon: <FaFileContract />,
      title: 'ייעוץ והשקעות',
      description: 'ייעוץ מקיף לרכישה להשקעה',
      features: ['ניתוח תשואות', 'איתור הזדמנויות', 'ליווי משפטי'],
    },
    {
      icon: <FaCalculator />,
      title: 'ליווי פיננסי',
      description: 'סיוע בהסדרת מימון ומשכנתא',
      features: ['התאמת משכנתא', 'ליווי מול בנקים', 'אופטימיזציה פיננסית'],
    },
  ];

  const areas = [
    'תל אביב',
    'רמת גן',
    'גבעתיים',
    'הרצליה',
    'רעננה',
    'כפר סבא',
    'פתח תקווה',
    'ראשון לציון',
  ];

  const workProcess = [
    { icon: <FaUserTie />, title: 'פגישת היכרות', desc: 'הקשבה לצרכים ולחלומות שלכם' },
    { icon: <FaChartLine />, title: 'ניתוח מקיף', desc: 'בחינת כל האפשרויות המתאימות' },
    { icon: <FaMapMarkedAlt />, title: 'חיפוש ממוקד', desc: 'איתור הנכס המושלם עבורכם' },
    { icon: <FaShieldAlt />, title: 'ליווי מלא', desc: 'תמיכה מהרגע הראשון ועד קבלת המפתח' },
  ];

  return (
    <section className="about-section">
      {/* Stats Bar */}
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section with Profile */}
      <div className="about-container">
        <div className="about-grid">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img src="./profile.jpg" alt="טל אזולאי - סוכן נדל״ן" className="profile-image" />
              <div className="profile-badge">
                <FaAward />
                <span>סוכן מוביל</span>
              </div>
            </div>
            <div className="profile-info">
              <h2>טל אזולאי</h2>
              <p className="profile-title">מומחה נדל״ן בכיר</p>
              <div className="profile-features">
                <span>
                  <FaCheckCircle /> רישיון מתווך מוסמך
                </span>
                <span>
                  <FaCheckCircle /> 10 שנות ניסיון
                </span>
                <span>
                  <FaCheckCircle /> מומחה לאזור המרכז
                </span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h2 className="section-title">קצת עליי</h2>
            <p className="about-text">
              שמי טל אזולאי, ובמשך עשור אני זוכה לעזור למשפחות, זוגות צעירים ומשקיעים למצוא את הבית
              המושלם שלהם. מה שהתחיל כקריירה הפך לשליחות - להיות שם בשבילכם ברגעים המשמעותיים ביותר
              בחיים.
            </p>
            <p className="about-text">
              אני מאמין שמעבר למקצועיות והידע, מה שמייחד אותי הוא היכולת לראות את התמונה הרחבה - לא
              רק לסגור עסקה, אלא להבטיח שהיא נכונה עבורכם לטווח הארוך. כל לקוח מקבל ממני יחס אישי,
              זמינות מלאה, ומחויבות אמיתית להשיג את התוצאה הטובה ביותר.
            </p>
            <p className="about-text">
              בין אם אתם מוכרים, קונים, או רק שוקלים את הצעד הבא - אני כאן בשבילכם עם ייעוץ מקצועי,
              ליווי צמוד, וחיבור לכל המומחים הנדרשים בתחום. יחד נהפוך את החלום שלכם למציאות.
            </p>

            {/* Work Process Timeline */}
            <div className="process-timeline">
              {workProcess.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                  {index < workProcess.length - 1 && <div className="step-connector" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container">
        <h2 className="section-title text-center">השירותים שלנו</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Areas Section */}
      <div className="areas-container">
        <h2 className="section-title text-center">אזורי פעילות</h2>
        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-tag">
              <FaMapMarkedAlt className="area-icon" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

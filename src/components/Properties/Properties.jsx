import React from 'react';
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHome,
  FaBuilding,
  FaTree,
  FaCity,
} from 'react-icons/fa';
import './Properties.css';

const Properties = () => {
  // Successful transactions data
  const transactions = [
    {
      id: 1,
      type: 'דירת 4 חדרים',
      location: 'רמת גן - הבורסה',
      date: 'דצמבר 2023',
      price: '3.2M ₪',
      icon: <FaBuilding />,
      highlight: 'מכירה מהירה תוך 3 שבועות',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      type: 'פנטהאוז',
      location: 'תל אביב - צפון ישן',
      date: 'נובמבר 2023',
      price: '5.8M ₪',
      icon: <FaCity />,
      highlight: 'מעל המחיר המבוקש',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      type: 'דירת גן',
      location: 'הרצליה - משכנות',
      date: 'אוקטובר 2023',
      price: '4.1M ₪',
      icon: <FaTree />,
      highlight: 'עסקה מורכבת שהושלמה בהצלחה',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      type: 'דירת 3 חדרים',
      location: 'גבעתיים - בורוכוב',
      date: 'ספטמבר 2023',
      price: '2.7M ₪',
      icon: <FaHome />,
      highlight: 'ליווי מלא למשפחה צעירה',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div className="properties-container">
      {/* Section Header */}
      <div className="properties-header">
        <p className="properties-description">
          גאים ללוות את לקוחותינו לעסקאות מוצלחות ולבית החדש שלהם
        </p>
      </div>

      {/* Transactions Grid */}
      <div className="transactions-grid">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="transaction-card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Success Badge */}
            <div className="success-badge">
              <FaCheckCircle />
              <span>הושלם</span>
            </div>

            <div className="transaction-card-content">
              {/* Transaction Image */}
              <div className="transaction-image">
                <img src={transaction.image} alt={transaction.type} />
                <div className="transaction-icon-badge">{transaction.icon}</div>
              </div>

              {/* Transaction Info */}
              <div className="transaction-info">
                <h4 className="transaction-type">{transaction.type}</h4>

                <div className="transaction-details">
                  <div className="transaction-detail">
                    <FaMapMarkerAlt />
                    <span>{transaction.location}</span>
                  </div>

                  <div className="transaction-detail">
                    <FaCalendarAlt />
                    <span>{transaction.date}</span>
                  </div>
                </div>

                <div className="transaction-price">{transaction.price}</div>

                <div className="transaction-highlight">"{transaction.highlight}"</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="properties-cta">
        <h3>רוצים להיות הבאים ברשימת ההצלחות?</h3>
        <p>צרו קשר עוד היום ונתחיל את המסע שלכם לבית החדש</p>
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

export default Properties;

import React from 'react';
import './Card.css';

const Card = ({ title, description, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <button className="info-button">i</button>
      </div>
      <p className="card-description">
        <strong>Description:</strong> {description}
      </p>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;

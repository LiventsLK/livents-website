import React from 'react';
import './StarryBackground.scss';

const StarryBackground = () => {
  return (
    <div className="stars-container">
      <div id="stars-small"></div>
      <div id="stars-medium"></div>
      <div id="stars-large"></div>
    </div>
  );
};

export default StarryBackground;
import React from 'react';
import './offers.css'; // Import CSS for styling
import Image5 from "../images/image5.png";

function Offers() {
  return (
    <div className="offers-container">
      <img src= {Image5}alt="Offers" className="offers-image" />
      <div className="offers-text">
        <h1>Special Offers</h1>
        <p>Check out our latest special offers and discounts.</p>
      </div>
    </div>
  );
}

export default Offers;
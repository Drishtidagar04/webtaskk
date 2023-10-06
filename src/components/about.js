// About.js
// About.js

// About.js

import React from 'react';
import Image1 from "../images/card-image-1.png";
import Image2 from "../images/card-image-2.png";
import Image4 from "../images/card-image.png";
import Image3 from "../images/card-image-3.png";
import './about.css'; // Import CSS for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-p">
        <h1>About Tropical</h1>
        <p>The objective of the foundation is primarily to assist financially handicapped students from deprived communities who have been admitted to the University of Ghana to pursue undergraduate programmes with special emphasis on Science. This is because the board of trustees believe that in this era of technology, the only way forward for the country is to increase capacity in science and technology in order to keep pace with global trends and remain relevant and competitive.</p>
        </div>
       <h2>Universities</h2>
        <div className="about-item">
        <img src={Image1} alt="Description 1" />
      </div>
      <div className="about-item">
        
        <p>1. Oxford University</p>
        <img src={Image2} alt="Description 2" />
        <p>2. Stanford University</p>
        <img src={Image4} alt="Description 3" />
        <p>3. Harvard University</p>
        <img src={Image3} alt="Description 4" />
        <p>4. Nalyung Technology</p>
      </div>
    </div>
  );
}

export default About;

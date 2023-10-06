// Home.js
import React from 'react';
import homep from "../images/homep.png";
import { Link } from 'react-router-dom';
import './Home.css'; // Import a CSS file for custom styles

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1>TROPICAL DESTINATION FOR STUDENTS</h1>
        <p>
          The Tropical Students Support Initiative (TSSI), formerly known as Tropical Saint Anthony’s Foundation, is calling on qualified undergraduate students pursuing their studies from this academic year to put in an application.
          Established in May 2010 to provide scholarships to needy students who have applied to study or are studying at the University of Ghana (UG), the TSSI is a charitable organisation set up by Tropical Cable and Conductor Limited (TCCL) and the Oteng-Gyasi Family.
        </p>
        <Link to="/signin" className="btn btn-primary">Sign In</Link>
        </div>
      <div className="image">
        <img src={homep} alt="Home" width="150" height="300" />
      

      </div>
      <footer className="bg-dark text-white mt-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li><a href="/terms-and-condition">Terms and Conditions</a></li>
                <li><a href="privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Privacy</h5>
              <ul className="list-unstyled">
                <li><a href="/privacy">Privacy Statement</a></li>
                <li><a href="data-protection">Data Protection</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <address>
                <p>1234 Main St</p>
                <p>City, Country</p>
                <p>Email: example@example.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;


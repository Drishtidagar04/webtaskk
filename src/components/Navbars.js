// Navbar.js
import React from 'react';
import { Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">webtask</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        
          <li className="nav-item">
          <Link to="/home" className="nav-link">home</Link>
          </li>
         
            <li className="nav-item">
           <Link to="/about" className="nav-link">About</Link>
           </li>
           <li className="nav-item">
           <Link to="/booking" className="nav-link">Booking</Link>
           </li>
          
         
        </ul>
      </div>
      <div className="ml-auto">
        <Link to ="/courses" className="btn btn-primary mr-2" href="/courses">Courses</Link>
        <Link to ="/offers" className="btn btn-success" href="/offers">Offers</Link>
      </div>
    </nav>
  );
}




export default Navbar;

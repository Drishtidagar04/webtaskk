import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbars';
import About from './components/about';
import Offers from './components/offers';
import BookingForm from './components/BookingForm';
import SignIn from './components/SignInForm'; 
// Import Bootstrap CSS
//import BookingForm from './components/BookingForm';


function App() {
  return (
   <>
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes> {/* Change this line */}
            <Route path="/home" element={<Home />} /> {/* Change this line */}
            {/* Define routes for other pages here */}
            {<Route path="/about" element={<About />} /> }
            {<Route path="/offers" element={<Offers />} /> }
            {<Route path="/booking" element={<BookingForm />} /> }
            <Route path="/signin" element={<SignIn />} />
            
            {/* <Route path="/contact" element={<Contact />} /> */}
          
          </Routes> {/* Change this line */}
        </div>
      </div>
    </Router>
   
   

    
   </>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function DiscountSection() {
  return (
    <React.Fragment>
             <div className = "discount-section">
                 <h2>Get 20% flat discount on our luxurious rooms </h2>
                 <h5>Book your room in advance before 31 August and get 20% available discount</h5>
                 <div className = "booking-btn">
                   <Link to = "/rooms" className = "btn-primary">Book now</Link>
                 </div>
             </div>
    </React.Fragment>
  );
}

export default DiscountSection;

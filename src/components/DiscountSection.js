import React from 'react';
import Hero from './Hero';

function DiscountSection() {
  return (
    <React.Fragment>
       <Hero hero ="discountHero">
       <div class="discount-highlights">
         <div class="container">
           <div class="row">
             <div class="col-md-8">
             <h2>Get some 20% flat discount on top and luxurious rooms</h2>
             <p>Hurry up and book your room now before 31st August.</p>
           </div>
           <div class="col-md-4">
              <button type="button" class="booking-btn">Book Now</button>
           </div>
           </div>
         </div>
       </div>
       </Hero>
    </React.Fragment>
  );
}

export default DiscountSection;

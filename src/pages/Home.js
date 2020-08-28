import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import DiscountSection from '../components/DiscountSection';
import FeaturedRooms from '../components/FeaturedRooms';

function Home() {
  return (
    <React.Fragment>
     <Hero>
       <Banner title = "luxurious rooms" subtitle = "deluxe rooms starting at $299">
         <Link to = "/rooms" className = "btn-primary">Our rooms</Link>
      </Banner>
     </Hero>
     <Services />
     <FeaturedRooms />
     <DiscountSection />
    </React.Fragment>
  );
}

export default Home;

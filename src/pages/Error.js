import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
function Error() {
  return (
    <React.Fragment>
     <Hero>
       <Banner title = "404 page not found" subtitle = "It looks like you have followed as broken link or entered a url that doesn't exist :)">
         <Link to = "/" className = "btn-primary">Return Home</Link>
      </Banner>
     </Hero>
    </React.Fragment>
  );
}

export default Error;

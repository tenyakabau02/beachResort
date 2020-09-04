import React from 'react';
import { FaFacebook , FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {

        return (
          <React.Fragment>
           <section className = "footer">
             <div className = "footer-container">
               <hr/>
               <a href = "https://www.facebook.com/" className = "social-icon"><FaFacebook /></a>
               <a href = "https://www.twitter.com/" className = "social-icon"><FaTwitter /></a>
               <a href = "https://www.LinkedIn.com/" className = "social-icon"><FaLinkedin /></a>
               <p className="footer-copyright">© Copyright 2020 BEACH RESORT.</p>
             </div>
           </section>

          </React.Fragment>
        );
      }


export default Footer;

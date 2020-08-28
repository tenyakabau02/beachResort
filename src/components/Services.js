import React from 'react';
import Title from './Title';
import { FaShuttleVan , FaBeer, FaCocktail, FaHiking } from 'react-icons/fa';

class Services extends React.Component {
  constructor() {
    super();
    this.state = {
      services : [
        { icon : <FaCocktail />,
          title : "Free Cocktails",
           info : "Lorem ipsum dolor sit amet consectetur adpssicing elit. Magni, corporis!"
        },

        { icon : <FaHiking />,
          title : "Endless Hiking",
           info : "Lorem ipsum dolor sit amet consectetur adpssicing elit. Magni, corporis!"
        },

        { icon : <FaShuttleVan />,
          title : "Free Shuttle",
           info : "Lorem ipsum dolor sit amet consectetur adpssicing elit. Magni, corporis!"
        },

        { icon : <FaBeer />,
          title : "Strongest Beer",
           info : "Lorem ipsum dolor sit amet consectetur adpssicing elit. Magni, corporis!"
        }
      ]
    };
  }

  render() {
    return (
      <section className = "services">
        <Title title = "Services" />
        <div className = "services-center">
            {this.state.services.map((item,index) => {
              return (
               <article key = {index} className = "service">
                 <span>{item.icon}</span>
                 <h6>{item.title}</h6>
                 <p>{item.info}</p>
               </article>
             );
            })}
        </div>
      </section>
    );
  }
}

export default Services;

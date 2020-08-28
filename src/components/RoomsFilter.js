import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

function RoomsFilter({rooms}) {

  //passing data from context

   const context = useContext(RoomContext);
   const { handleChange, type , capacity, price, minPrice, maxPrice, maxSize, minSize, breakfast, pets} = context;

   //get all unique values

   getUnique = (items,value) => {
     return [...new Set(items.map(item => item[value]))];
   }

  // get uniques types
   let types = this.getUnique(rooms,'type');

  //add all to the types array
   types = ["all",...types];

   //map types to jsx
   types = types.map((item,index) => {
     return <option value = {item} key = {index}>{item}</option>
   });

// get unique capacity values
  let people = this.getUnique(rooms,'capacity');
   people = people.map((item,index) => {
     return <option key = {index} value = {item}>{item}</option>
   })

   return (
     <section className = "filter-container">
        <Title title = "search rooms" />
        <form className = "filter-form">
          {/* select type*/}
           <div className = "form-group">
            <label htmlFor = "type">room type </label>
            <select name = "type" id = "type" value = {type} className = "form-control" onChange = {this.handleChange}>
              {types}
            </select>
           </div>
         {/* end select type*/}
         {/* guests*/}
          <div className = "form-group">
           <label htmlFor = "capacity">Guest</label>
           <select name = "capacity" id = "capacity" value = {capacity} className = "form-control" onChange = {this.handleChange}>
             {people}
           </select>
          </div>
        {/*end of guests*/}
        {/* room price*/}
         <div className = "form-group">
          <label htmlFor = "price">room price $ {price}</label>
          <input
              type = "range"
              name = "price"
              min = {minPrice}
              max = {maxPrice}
              id = "price"
              value = {price}
              className = "form-control"
              onChange = {this.handleChange}
          />
         </div>
        {/*end of room price*/}
        {/* size*/}
         <div className = "form-group">
            <label htmlFor = "size">room size</label>
            <div className ="size-inputs">
              <input
                 type = "number"
                name = "minSize"
                id = "size"
                value = {minSize}
                className = "size-input"
                onChange = {this.handleChange}
              />

              <input
                 type = "number"
                 name = "maxSize"
                 id = "size"
                 value = {maxSize}
                 className = "size-input"
                 onChange = {this.handleChange}
              />
            </div>
         </div>
        {/*end of size*/}
        {/* extras*/}
         <div className = "form-group">
          <div className = "single-extra">
            <input
               type = "checkbox"
               name = "breakfast"
               id = "breakfast"
               checked = {breakfast}
               onChange = {this.handleChange}
             />
            <label htmlFor = "breakfast">breakfast</label>
          </div>
            <div className = "single-extra">
              <input
                 type = "checkbox"
                 name = "pets"
                 id = "pets"
                 checked = {pets}
                 onChange = {this.handleChange}
              />
              <label htmlFor = "pets">pets</label>
            </div>
          </div>
        {/*end of extras*/}

        </form>
     </section>
   );
}

export default RoomsFilter;
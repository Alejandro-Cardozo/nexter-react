import React from 'react';
import { realtors } from '../data';

const Realtor = ({ img, name, sales, index }) => {
  return (
    <>
      <img src={img} alt={`Realtor ${index}`} className='realtors__img' />
      <div className='realtors__details'>
        <h4 className='heading-4 heading-4--light'>{name}</h4>
        <p className='realtors__sold'>{sales} houses sold</p>
      </div>
    </>
  );
};

const Realtors = () => {
  return (
    <div className='realtors'>
      <h3 className='heading-3'>Top 3 Realtors</h3>
      <div className='realtors__list'>
        {realtors.map((realtor, i) => (
          <Realtor
            img={realtor.img}
            name={realtor.name}
            sales={realtor.sales}
            key={realtor.id}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Realtors;

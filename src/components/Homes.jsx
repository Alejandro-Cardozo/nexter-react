import React from 'react';
import { housesInfo } from '../data';
import HomeCard from './UI/HomeCard';

const Homes = () => {
  return (
    <section className='homes'>
      {housesInfo.map((house) => (
        <HomeCard info={house} key={house.id}/>
      ))}
    </section>
  );
};

export default Homes;

import React from 'react';
import { Expand, HeartFull, Key, MapPin, ProfileMale } from './Icons';

const HomeCard = ({ info }) => {
  console.log(info);
  return (
    <div className='home'>
      <img src={info.img} alt={`House ${info.id}`} className='home__img' />
      <HeartFull className='home__like' />
      <h5 className='home__name'>{info.name}</h5>
      <div className='home__location'>
        <MapPin />
        <p>{info.location}</p>
      </div>
      <div className='home__rooms'>
        <ProfileMale />
        <p>{info.rooms} rooms</p>
      </div>
      <div className='home__area'>
        <Expand />
        <p>
          {info.area} m<sup>2</sup>
        </p>
      </div>
      <div className='home__price'>
        <Key />
        <p>$ {info.price}</p>
      </div>
      <button className='cta'>Contact realtor</button>
    </div>
  );
};

export default HomeCard;

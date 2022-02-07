import React from 'react';
import { Expand, HeartFull, Key, MapPin, ProfileMale } from './Icons';

const HomeCard = ({ info }) => {
  return (
    <div className='home'>
      <img src={info.img} alt={`House ${info.id}`} className='home__img' />
      <HeartFull className='home__like' viewBox="0 0 32 32" />
      <h5 className='home__name'>{info.name}</h5>
      <div className='home__location'>
        <MapPin viewBox="0 0 32 32" />
        <p>{info.location}</p>
      </div>
      <div className='home__rooms'>
        <ProfileMale viewBox="0 0 32 32" />
        <p>{info.rooms} rooms</p>
      </div>
      <div className='home__area'>
        <Expand viewBox="0 0 32 32" />
        <p>
          {info.area} m<sup>2</sup>
        </p>
      </div>
      <div className='home__price'>
        <Key viewBox="0 0 32 32" />
        <p>$ {info.price}</p>
      </div>
      <button className='btn home__btn'>Contact realtor</button>
    </div>
  );
};

export default HomeCard;

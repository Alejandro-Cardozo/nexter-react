import React from 'react';
import image1 from '../img/gal-1.jpeg';

const Gallery = () => {
  return (
    <section className='gallery'>
      <figure className='gallery__item gallery__item--1'>
        <img src={image1} alt='Gallery image 1' className='gallery__img' />
      </figure>
    </section>
  );
};

export default Gallery;

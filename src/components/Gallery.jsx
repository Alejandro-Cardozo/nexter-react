import React from 'react';
import { galleryImages } from '../data';

const Gallery = () => {
  return (
    <section className='gallery'>
      {galleryImages.map((image) => (
        <figure className={`gallery__item ${image.class}`}>
          <img src={image.img} alt={image.name} className='gallery__img' />
        </figure>
      ))}
    </section>
  );
};

export default Gallery;

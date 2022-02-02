import React from 'react';
import couple from '../img/story-1.jpeg';
import house from '../img/story-2.jpeg';



const StoryPictures = () => {
  return <div className='story__pictures'>
    <img src={couple} alt="Couple with new house" className="story__img--1" />
    <img src={house} alt="New house" className="story__img--2" />
  </div>;
};

export default StoryPictures;

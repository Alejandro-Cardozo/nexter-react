import React from 'react';
import {
  Global,
  Key,
  Lock,
  Trophy,
  Presentation,
  MapPin
} from '../components/UI/Icons';

function Features() {
  return (
    <div className='features'>
      <div className='feature'>
        <Global className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>World's best luxury homes</h4>
        <p className='feature_text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sint a
          porro, beatae accusantium ipsa?
        </p>
      </div>
      <div className='feature'>
        <Trophy className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>Only the best properties</h4>
        <p className='feature_text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sit
          illo sint qui nihil voluptates.
        </p>
      </div>
      <div className='feature'>
        <MapPin className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>All homes in top locations</h4>
        <p className='feature_text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          blanditiis fugit, fugiat quis labore explicabo!
        </p>
      </div>
      <div className='feature'>
        <Key className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>New Home in one week</h4>
        <p className='feature_text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          nisi. Ea explicabo suscipit ipsam est.
        </p>
      </div>
      <div className='feature'>
        <Presentation className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
        <p className='feature_text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, dolore
          doloribus? Explicabo adipisci ipsa quibusdam.
        </p>
      </div>
      <div className='feature'>
        <Lock className='feature__icon' />
        <h4 className='heading-4 heading-4--dark'>Secure payments on nexter</h4>
        <p className='feature_text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quasi
          impedit deserunt quisquam molestias repudiandae?
        </p>
      </div>
    </div>
  );
}

export default Features;

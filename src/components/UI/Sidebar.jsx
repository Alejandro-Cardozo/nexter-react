import { useState } from 'react';

const Sidebar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className='sidebar'>
        <button
          onClick={() => setChecked((prev) => !prev)}
          className={checked ? 'nav-btn nav-btn--checked' : 'nav-btn'}
        >
          <div className="nav-btn__icon"></div>
        </button>
      </div>
      <div className={checked ? 'toggleMenu visible' : 'toggleMenu'}>
        <ul>
          <li className='toggleMenu__item'>
            <a href='#home' className='toggleMenu__link' onClick={() => setChecked((prev) => !prev)}>
              Home
            </a>
          </li>
          <li className='toggleMenu__item'>
            <a href='#features' className='toggleMenu__link' onClick={() => setChecked((prev) => !prev)}>
              Features
            </a>
          </li>
          <li className='toggleMenu__item'>
            <a href='#reviews' className='toggleMenu__link' onClick={() => setChecked((prev) => !prev)}>
              Reviews
            </a>
          </li>
          <li className='toggleMenu__item'>
            <a href='#properties' className='toggleMenu__link' onClick={() => setChecked((prev) => !prev)}>
              Properties
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

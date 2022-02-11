import { useState, useEffect } from 'react';

const GoTopButton = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (scrollPosition > 200) {
      return setShowGoTop(true);
    } else {
      return setShowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }),
    [scrollPosition];

  return (
    <>
      <div>
        <button
          className={showGoTop ? 'goTop' : 'goTopHidden'}
          onClick={() => (window.location.href = props.topSection)}
        >
          <i className='goTop__icon'>&uarr;</i>
        </button>
      </div>
    </>
  );
};
export default GoTopButton;

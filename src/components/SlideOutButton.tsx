import React from 'react';

const SlideOutButton = () => {
  const handleClick = () => {
    // Logic to show the slide-out menu
    alert('Slide-out button clicked!');
  };

  return (
    <button 
      className="slide-out-button"
      onClick={handleClick}
    >
      Slide Out
    </button>
  );
};

export default SlideOutButton;

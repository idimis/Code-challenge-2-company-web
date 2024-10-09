import React from 'react';

const BurgerButton = () => {
  const handleClick = () => {
    
    alert('Burger button clicked!');
  };

  return (
    <button 
      className="burger-button"
      onClick={handleClick}
    >
      &#9776; 
    </button>
  );
};

export default BurgerButton;

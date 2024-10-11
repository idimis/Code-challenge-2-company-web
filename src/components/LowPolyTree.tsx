import React, { useEffect, useState } from 'react';

const treeData = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  positionX: Math.random() * 100, 
  positionY: Math.random() * 30 + 40, 
}));

const windmillData = Array.from({ length: 3 }, (_, index) => ({
  id: index,
  positionX: Math.random() * 100, 
  positionY: Math.random() * 20 + 40, 
}));

const MultipleSwayingTrees = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-blue-300" style={{ width: '1440px' }}>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-brown-500" />
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-yellow-300 to-transparent opacity-75" />

      {treeData.map((tree) => {
        const sway = Math.sin(scrollY * 0.05 + tree.id) * 5;

        return (
          <div
            key={tree.id}
            className="absolute"
            style={{
              left: `${tree.positionX}vw`,
              bottom: `${tree.positionY}vh`,
              transform: `rotate(${sway}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <polygon points="50,10 30,60 70,60" fill="#4CAF50" /> 
              <polygon points="50,20 20,70 80,70" fill="#388E3C" /> 
              <rect x="45" y="60" width="10" height="20" fill="#795548" /> 
            </svg>
          </div>
        );
      })}

      {/* Windmill */}
      {windmillData.map((windmill) => {
        const sway = Math.sin(scrollY * 0.05 + windmill.id) * 5;

        return (
          <div
            key={windmill.id}
            className="absolute"
            style={{
              left: `${windmill.positionX}vw`,
              bottom: `${windmill.positionY}vh`,
              transform: `rotate(${sway}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <rect x="45" y="20" width="10" height="40" fill="#795548" /> {/* Pole */}
              <polygon points="40,20 60,20 55,5 45,5" fill="#FFCC00" /> {/* Blade 1 */}
              <polygon points="40,20 60,20 55,35 45,35" fill="#FFCC00" /> {/* Blade 2 */}
              <polygon points="40,20 60,20 45,15 55,15" fill="#FFCC00" /> {/* Blade 3 */}
              <polygon points="40,20 60,20 45,25 55,25" fill="#FFCC00" /> {/* Blade 4 */}
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleSwayingTrees;

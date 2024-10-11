import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onLoadComplete();
          return prev;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="text-2xl font-bold mb-4">{`Loading ${progress}%`}</div>
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Trees - 8-bit style */}
        <div className="absolute left-24 bottom-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-20 h-20"
          >
            <rect x="40" y="50" width="20" height="30" fill="#795548" /> {/* trunk */}
            <rect x="25" y="30" width="50" height="20" fill="#4CAF50" /> {/* foliage */}
            <rect x="30" y="20" width="40" height="20" fill="#388E3C" />
          </svg>
        </div>

        <div className="absolute left-40 bottom-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-20 h-20"
          >
            <rect x="40" y="50" width="20" height="30" fill="#795548" /> {/* trunk */}
            <rect x="20" y="30" width="60" height="20" fill="#4CAF50" /> {/* foliage */}
            <rect x="25" y="20" width="50" height="20" fill="#388E3C" />
          </svg>
        </div>

        <div className="absolute left-32 bottom-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-20 h-20"
          >
            <rect x="40" y="50" width="20" height="30" fill="#795548" /> {/* trunk */}
            <rect x="30" y="30" width="40" height="20" fill="#4CAF50" /> {/* foliage */}
            <rect x="35" y="20" width="30" height="20" fill="#388E3C" />
          </svg>
        </div>

        {/* 8-bit Cat chasing 8-bit butterfly */}
        <div className="absolute left-0 bottom-16 flex items-center animate-cat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-24 h-24"
          >
            {/* 8-bit cat - basic squares */}
            <rect x="30" y="70" width="15" height="15" fill="#FFD700" /> {/* back leg */}
            <rect x="50" y="70" width="15" height="15" fill="#FFD700" /> {/* front leg */}
            <rect x="35" y="60" width="30" height="15" fill="#FF4500" /> {/* body */}
            <rect x="40" y="50" width="20" height="10" fill="#FF4500" /> {/* head */}
            <rect x="38" y="52" width="5" height="5" fill="black" /> {/* eye */}
            <rect x="58" y="52" width="5" height="5" fill="black" /> {/* eye */}
            <rect x="30" y="55" width="10" height="5" fill="#FF4500" /> {/* tail */}
          </svg>
        </div>

        {/* 8-bit Butterfly */}
        <div className="absolute left-32 bottom-24 animate-butterfly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-16 h-16"
          >
            {/* 8-bit butterfly - basic circles and polygons */}
            <rect x="45" y="10" width="10" height="20" fill="#FF69B4" /> {/* body */}
            <polygon points="40,20 30,40 50,40" fill="#FF69B4" /> {/* left wing */}
            <polygon points="60,20 70,40 50,40" fill="#FF69B4" /> {/* right wing */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

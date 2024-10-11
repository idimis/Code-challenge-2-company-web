import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/public/Animation - windmillsolarpanel.json';

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
      <div className="relative w-full h-full flex items-center justify-center flex-col">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          style={{ width: '500px', height: '500px' }} 
        />
        <div className="text-2xl font-bold mt-2">{`Loading ${progress}%`}</div>
        
        <div className="text-lg mt-2">
          <AnimatedDots />
        </div>
      </div>
    </div>
  );
};

const AnimatedDots = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : '.'));
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div>Please wait{dots}</div>
      <div>Mother Earth is healing 🌱</div>
    </div>
  );
};

export default LoadingScreen;

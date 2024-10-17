import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '@/public/Animation - windmillsolarpanel.json';

const LoadingScreen: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          onLoadComplete();
          return prev;
        }
        return prev + 10; 
      });
    }, 275);

    return () => clearTimeout(timer);
  }, [progress, onLoadComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="relative w-full h-full flex items-center justify-center flex-col">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: '80%', height: 'auto', maxWidth: '500px' }} 
        />
        <div className="text-2xl font-bold mt-2 sm:text-3xl md:text-4xl">{`Loading ${progress}%`}</div>

        <div className="text-lg mt-2 sm:text-xl md:text-2xl">
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
    }, 300); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="text-base sm:text-lg md:text-xl">Please wait{dots}</div>
      <div className="text-base sm:text-lg md:text-xl">Mother Earth is healing 🌱</div>
    </div>
  );
};

export default React.memo(LoadingScreen);

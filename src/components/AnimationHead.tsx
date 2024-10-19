import React from 'react';
import dynamic from 'next/dynamic';


const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '@/public/Animationhead.json'; 

const AnimationHead: React.FC = () => {
  return (
    <div className="flex justify-center mt-10 bg-blue-500 p-4 rounded-lg shadow-lg">
      <div className="overflow-hidden rounded-lg">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true} 
          style={{ height: '300px', width: '300px' }}
          aria-label="Animation showing renewable energy solutions"
        />
      </div>
      
      <p className="text-white mt-4 text-lg" role="note">
        Explore renewable energy solutions for a sustainable future.
      </p>
    </div>
  );
};

export default AnimationHead;

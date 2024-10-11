import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/public/Animationhead.json'; 

const AnimationHead: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-[1440px] max-h-[800px] overflow-hidden">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true} 
          style={{ height: '100%', width: '100%' }} 
        />
      </div>
    </div>
  );
};

export default AnimationHead;

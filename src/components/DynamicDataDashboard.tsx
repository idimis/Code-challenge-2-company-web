import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const data = {
  treesCut: 1454623,
  worldPollution: 4000000000,
  lossesFromNonRenewable: 3000000000,
  renewableEfforts: 1500000,
  treesPlanted: 500000,
  carbonReduction: 3500000,
  companyEfforts: 200000,
  emergingGreenJobs: 100000,
  waterSaved: 2500000,
};

const DynamicDataDashboard: React.FC = () => {
  const [animatedData, setAnimatedData] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        setAnimatedData((prevData) => ({
          ...prevData,
          treesCut: Math.min(prevData.treesCut + Math.floor(Math.random() * 100), 2000000),
          worldPollution: Math.min(prevData.worldPollution + Math.floor(Math.random() * 10000000), 5000000000),
          lossesFromNonRenewable: Math.min(prevData.lossesFromNonRenewable + Math.floor(Math.random() * 5000000), 4000000000),
          renewableEfforts: Math.min(prevData.renewableEfforts + Math.floor(Math.random() * 1000), 2000000),
          treesPlanted: Math.min(prevData.treesPlanted + Math.floor(Math.random() * 500), 1000000),
          carbonReduction: Math.min(prevData.carbonReduction + Math.floor(Math.random() * 10000), 5000000),
          companyEfforts: Math.min(prevData.companyEfforts + Math.floor(Math.random() * 500), 300000),
          emergingGreenJobs: Math.min(prevData.emergingGreenJobs + Math.floor(Math.random() * 100), 150000),
          waterSaved: Math.min(prevData.waterSaved + Math.floor(Math.random() * 5000), 5000000),
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => {
      if (dashboardRef.current) {
        observer.unobserve(dashboardRef.current);
      }
    };
  }, [dashboardRef]);

  // Function to generate random slide-in directions
  const getRandomDirection = () => {
    const directions = ['-100%', '100%', '-100%', '100%'];
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  };

  const bounceAnimation = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 1], transition: { duration: 0.4, yoyo: Infinity } },
  };

  return (
    <div
      ref={dashboardRef}
      className="flex flex-col items-center justify-center max-w-1440 mx-auto my-10 p-5 bg-gray-200 shadow-lg rounded-lg"
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{ hidden: { opacity: 0, x: getRandomDirection() }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 1.2 }}
        className="text-black text-4xl font-bold mb-5"
      >
        Let&apos;s contribute for our Mother Earth!
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{ hidden: { opacity: 0, x: getRandomDirection() }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Object.entries(animatedData).map(([key, value], index) => {
          const titles = [
            'Trees Cut:',
            'World Pollution:',
            'Losses from Non-Renewable Energy:',
            'Efforts for Renewable Energy:',
            'Trees Planted:',
            'Carbon Reduction:',
            'Company Efforts (New World):',
            'Emerging Green Jobs:',
            'Water Saved:',
          ];

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: getRandomDirection(), y: getRandomDirection() }} // From random directions
              animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }} // End at original position when visible
              transition={{ duration: 1, delay: index * 0.2 }}
              className="p-5 border rounded-lg shadow-md bg-white"
            >
              <h2 className="text-xl font-semibold">{titles[index]}</h2>
              <motion.p {...bounceAnimation} className="text-xl">
                {key === 'worldPollution' ? (value / 1_000_000_000).toFixed(2) :
                  key === 'lossesFromNonRenewable' ? `$${value.toLocaleString()}` :
                  key === 'carbonReduction' ? (value / 1_000_000).toFixed(2) :
                  value.toLocaleString()}
                <span className="text-sm">
                  {key === 'worldPollution' ? ' billion tons' :
                  key === 'lossesFromNonRenewable' ? ' billion USD' :
                  key === 'carbonReduction' ? ' million tons of CO₂' :
                  key === 'waterSaved' ? ' liters' :
                  ' units'}
                </span>
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex justify-center mt-10 space-x-5">
        <motion.div
          className="text-2xl font-semibold handwriting-font"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A <span className="text-green-600">greener</span> initiative a day, keeps the doomsday away! 🌱
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicDataDashboard;

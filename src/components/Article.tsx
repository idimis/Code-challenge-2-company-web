import React from 'react';
import Image from 'next/image'; 

const articles = [
  {
    title: "Transforming Communities with Solar Energy",
    description: "New World has successfully implemented solar energy projects in various communities, empowering them with sustainable power solutions.",
    imageUrl: "/windmill1.png", 
    link: "/articles/solar-energy"
  },
  {
    title: "Wind Energy: A New Era for Renewable Resources",
    description: "Through innovative wind energy projects, New World is leading the charge in harnessing wind power for a cleaner future.",
    imageUrl: "/windmill2.png", 
    link: "/articles/wind-energy"
  },
  {
    title: "Innovative Energy Storage Solutions",
    description: "New World has developed state-of-the-art energy storage systems, enhancing the efficiency of renewable energy utilization.",
    imageUrl: "/windmill3.png", 
    link: "/articles/energy-storage"
  },
];

const Articles = () => {
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl font-bold mb-8">Articles by New World</h2>
      <div className="flex flex-col space-y-10">
        {articles.map((article, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
            <div className="w-1/2">
              <Image 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-auto rounded-lg shadow-lg" 
                layout="responsive" 
                width={500} 
                height={300} 
              />
            </div>
            <div className="w-1/2 px-4">
              <h3 className="text-2xl font-semibold">{article.title}</h3>
              <p className="mt-2 text-gray-700">{article.description}</p>
              <a href={article.link} className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;

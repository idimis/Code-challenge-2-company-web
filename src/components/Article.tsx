import React from 'react';
import Image from 'next/image';
import windmill1 from '@/public/windmill1.png';
import windmill2 from '@/public/windmill2.png';
import windmill3 from '@/public/windmill3.png';

const articles = [
  {
    title: "Transforming Communities with Solar Energy",
    description: "New World has successfully implemented solar energy projects in various communities, empowering them with sustainable power solutions.",
    imageUrl: windmill1,
    link: "/articles/solar-energy"
  },
  {
    title: "Wind Energy: A New Era for Renewable Resources",
    description: "Through innovative wind energy projects, New World is leading the charge in harnessing wind power for a cleaner future.",
    imageUrl: windmill2,
    link: "/articles/wind-energy"
  },
  {
    title: "Innovative Energy Storage Solutions",
    description: "New World has developed state-of-the-art energy storage systems, enhancing the efficiency of renewable energy utilization.",
    imageUrl: windmill3,
    link: "/articles/energy-storage"
  },
];

const Articles = () => {
  return (
    <div className="submitted-articles px-4 py-10">
      <h2 className="text-center text-4xl font-bold mb-8">Articles by New World</h2>
      <div className="flex flex-col gap-10">
        {articles.map((article, index) => (
          <div key={index} className="article-container flex flex-row-reverse items-start gap-6">
            <div className="article-image flex-none" style={{ maxWidth: '150px', maxHeight: '90px' }}>
              <Image 
                src={article.imageUrl} 
                alt={article.title} 
                className="rounded-lg object-cover" 
                width={150}
                height={90}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="article-content flex-1">
              <h3 className="title text-xl font-semibold">{article.title}</h3>
              <p className="body-text mt-2 text-gray-800">{article.description}</p>
              <a href={article.link} className="read-more mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
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

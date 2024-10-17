import React from 'react';
import Image from 'next/image';
import article1 from '@/public/wrk.jpg';
import article2 from '@/public/windmill2.png';
import article3 from '@/public/storage.png';

const articles = [
  {
    title: "Transforming Communities with Solar Energy",
    description: "Ciptadaya has successfully implemented solar energy projects in various communities, empowering them with sustainable power solutions.",
    imageUrl: article1,
    link: "https://heliumrenewable.com/Home/UpdatesDetails/9",
  },
  {
    title: "Wind Energy: A New Era for Renewable Resources",
    description: "Through innovative wind energy projects, Ciptadaya is leading the charge in harnessing wind power for a cleaner future.",
    imageUrl: article2,
    link: "https://www.enelgreenpower.com/learning-hub/gigawhat/search-articles/articles/2023/07/fossils-new-era-renewables",
  },
  {
    title: "Innovative Energy Storage Solutions",
    description: "Ciptadaya has developed state-of-the-art energy storage systems, enhancing the efficiency of renewable energy utilization.",
    imageUrl: article3,
    link: "https://www.greyb.com/blog/energy-storage-innovation-trends/",
  },
];

const Articles = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Media Coverage</h2>
      
      <div className="flex flex-col gap-12">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            {/* Article Image */}
            <div className="flex-shrink-0 w-full md:w-64 h-40 relative">
              <Image 
                src={article.imageUrl} 
                alt={article.title} 
                className="rounded-lg object-cover" 
                layout="fill" 
              />
            </div>

            {/* Article Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">{article.title}</h3>
              <p className="text-gray-800 mb-4">{article.description}</p>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block border border-black font-semibold py-2 px-6 rounded hover:bg-gray-300 transition"
              >
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

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
    link: "https://heliumrenewable.com/Home/UpdatesDetails/9"
  },
  {
    title: "Wind Energy: A New Era for Renewable Resources",
    description: "Through innovative wind energy projects, New World is leading the charge in harnessing wind power for a cleaner future.",
    imageUrl: windmill2,
    link: "https://www.enelgreenpower.com/learning-hub/gigawhat/search-articles/articles/2023/07/fossils-new-era-renewables"
  },
  {
    title: "Innovative Energy Storage Solutions",
    description: "New World has developed state-of-the-art energy storage systems, enhancing the efficiency of renewable energy utilization.",
    imageUrl: windmill3,
    link: "https://www.greyb.com/blog/energy-storage-innovation-trends/"
  },
];

const Articles = () => {
  return (
    <div className="max-w-[1440px] mx-auto submitted-articles px-4 py-10">
      {/* Adjusted font size for title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Media Coverage</h2>
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
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="read-more mt-4 inline-block border border-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition"
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

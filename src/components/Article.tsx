import React from 'react';

const articles = [
  {
    title: "Transforming Communities with Solar Energy",
    description: "New World has successfully implemented solar energy projects in various communities, empowering them with sustainable power solutions.",
    imageUrl: "/images/solar-energy.jpg", // Ganti dengan path gambar yang sesuai
    link: "/articles/solar-energy" // Ganti dengan path link yang sesuai
  },
  {
    title: "Wind Energy: A New Era for Renewable Resources",
    description: "Through innovative wind energy projects, New World is leading the charge in harnessing wind power for a cleaner future.",
    imageUrl: "/images/wind-energy.jpg", // Ganti dengan path gambar yang sesuai
    link: "/articles/wind-energy" // Ganti dengan path link yang sesuai
  },
  {
    title: "Innovative Energy Storage Solutions",
    description: "New World has developed state-of-the-art energy storage systems, enhancing the efficiency of renewable energy utilization.",
    imageUrl: "/images/energy-storage.jpg", // Ganti dengan path gambar yang sesuai
    link: "/articles/energy-storage" // Ganti dengan path link yang sesuai
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
              <img src={article.imageUrl} alt={article.title} className="w-full h-auto rounded-lg shadow-lg" />
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

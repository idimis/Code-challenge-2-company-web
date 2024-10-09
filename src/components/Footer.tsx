import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col p-5">
      {/* Left Section */}
      <div className="bg-purple-200 p-2 h-12 text-xl font-bold font-serif">
        For inquiries, please feel free to <span className="underline">contact us via email</span>.
      </div>
      
      {/* Right Section */}
      <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <div className="flex justify-between w-full">
          <span>© 2023 New World. All rights reserved.</span>
          <div className="flex space-x-2">
            <a href="#" className="text-white no-underline">Homepage</a>
            <span>|</span>
            <a href="#" className="text-white no-underline">News</a>
            <span>|</span>
            <a href="#" className="text-white no-underline">About Us</a>
            <span>|</span>
            <a href="#" className="text-white no-underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

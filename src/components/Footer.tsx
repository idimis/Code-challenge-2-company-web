import React from 'react';

const Footer = () => {
  const email = "your-email@example.com"; 
  const subject = "Inquiry"; 
  const body = "Hello,\n\nI would like to inquire about..."; 
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="max-w-[1440px] mx-auto flex flex-col p-5">
      
      <div className="p-2 h-12 text-xl font-bold">
        For inquiries, please feel free to <a href={mailtoLink} className="underline">contact us via email</a>.
      </div>
      
     
      <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <div className="flex justify-between w-full">
          <span>© 2023 New World. All rights reserved.</span>
          <div className="flex space-x-2">
            <a href="/" className="text-white no-underline">Homepage</a>
            <span>|</span>
            <a href="https://www.greyb.com/blog/energy-storage-innovation-trends/" className="text-white no-underline">News</a>
            <span>|</span>
            <a href="/about" className="text-white no-underline">About Us</a>
            <span>|</span>
            <a href={mailtoLink} className="text-white no-underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

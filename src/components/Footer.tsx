import React from 'react';

const Footer: React.FC = () => {
  const email = 'your-email@example.com';
  const subject = 'Inquiry';
  const body = 'Hello,\n\nI would like to inquire about...';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="max-w-[1440px] mx-auto p-5">
      {/* Contact Section */}
      <div className="p-2 text-xl font-bold text-center">
        For inquiries, please feel free to{' '}
        <a href={mailtoLink} className="underline text-blue-600 hover:text-blue-800">
          contact us via email
        </a>
        .
      </div>

      {/* Footer Links Section */}
      <div className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center mt-4">
        {/* Copyright Section */}
        <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
          © 2023 New World. All rights reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
          <a href="/" className="text-white no-underline hover:underline">
            Homepage
          </a>
          <span>|</span>
          <a
            href="https://www.greyb.com/blog/energy-storage-innovation-trends/"
            className="text-white no-underline hover:underline"
          >
            News
          </a>
          <span>|</span>
          <a href="/about" className="text-white no-underline hover:underline">
            About Us
          </a>
          <span>|</span>
          <a href={mailtoLink} className="text-white no-underline hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

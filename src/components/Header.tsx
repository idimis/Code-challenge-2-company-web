"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-5">
        <div className="flex items-center ml-0">
          <div className="ml-2">
            <h1 className="text-3xl md:text-4xl font-bold">New World</h1>
            <h2 className="text-lg md:text-xl">Better Environment, Happier Generation</h2>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex items-center">
          <Link href="/" className="mx-4 text-black hover:underline">Home</Link>
          <Link href="/about" className="mx-4 text-black hover:underline">About Us</Link>
          <Link href="/services" className="mx-4 text-black hover:underline">Services</Link>
          <Link href="/teams" className="mx-4 text-black hover:underline">Teams</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col items-center bg-white p-4`}>
        <Link href="/" className="my-2 text-black hover:underline">Home</Link>
        <Link href="/about" className="my-2 text-black hover:underline">About Us</Link>
        <Link href="/services" className="my-2 text-black hover:underline">Services</Link>
        <Link href="/teams" className="my-2 text-black hover:underline">Teams</Link>
      </div>
    </header>
  );
};

export default Header;

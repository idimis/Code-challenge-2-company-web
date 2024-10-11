import { FC } from "react";
import Link from "next/link";

interface SlideoutProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const Slideout: FC<SlideoutProps> = ({ isOpen, closeMenu }) => {
  return (
    <>
      
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>}
      
      
      <div
        className={`fixed top-0 right-0 w-1/3 h-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <button
          className="absolute top-5 right-5 text-white text-3xl"
          onClick={closeMenu}
        >
          ✖
        </button>

        
        <ul className="flex flex-col items-center justify-center h-3/4 space-y-12 text-3xl font-bold">
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/teams" onClick={closeMenu}>
              Teams
            </Link>
          </li>
        </ul>

        
        <div className="absolute bottom-10 w-full flex justify-center space-x-8">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </>
  );
};

export default Slideout;

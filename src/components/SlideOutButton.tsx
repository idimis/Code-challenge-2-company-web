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
        className={`fixed top-0 right-0 w-2/3 md:w-1/3 h-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white text-3xl"
          onClick={closeMenu}
        >
          ✖
        </button>

        {/* Nav Items */}
        <ul className="flex flex-col items-center justify-center h-3/4 space-y-6 text-lg md:text-2xl lg:text-3xl font-bold">
          <li>
            <Link href="/" onClick={closeMenu}>
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu}>
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">
                Services
              </span>
            </Link>
          </li>
          <li>
            <Link href="/teams" onClick={closeMenu}>
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">
                Teams
              </span>
            </Link>
          </li>
          {/* New Quiz Link */}
          <li>
            <Link href="/quiz" onClick={closeMenu}>
              <span className="text-white hover:text-cyan-400 transition-colors duration-300">
                Take the Quiz!
              </span>
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="absolute bottom-10 w-full flex justify-center space-x-6 text-sm md:text-lg">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-lightseagreen transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-lightseagreen transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-lightseagreen transition-colors duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </>
  );
};

export default Slideout;

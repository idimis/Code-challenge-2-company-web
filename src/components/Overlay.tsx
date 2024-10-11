import { FC, useState, useEffect } from "react";
import SlideOutButton from "@/components/SlideOutButton"; // Pastikan ini sesuai dengan path komponen SlideOutButton

const Overlay: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("dark-overlay");
    } else {
      document.body.classList.remove("dark-overlay");
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        className="fixed right-5 top-1/2 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:bg-opacity-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleMenu}
      >
       
        <span className="emoji text-4xl animate-wiggle">🌍</span>

        {isHovered && (
          <span className="absolute right-24 bg-green-200 text-black p-2 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100 w-64 text-center">
            Hello, I'm Your <br />
            Green Energy Guide!😊
          </span>
        )}
      </div>

      {isMenuOpen && <div className="menu-overlay open" onClick={toggleMenu}></div>}
      <SlideOutButton isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  );
};

export default Overlay;

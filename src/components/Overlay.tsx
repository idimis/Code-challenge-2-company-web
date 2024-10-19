import { FC, useState, useEffect } from "react";
import SlideOutButton from "@/components/SlideOutButton"; 

const Overlay: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; 
      const windowHeight = window.innerHeight; 
      const documentHeight = document.documentElement.scrollHeight; 
      const footerHeight = document.querySelector('footer')?.offsetHeight || 0; 

     
      if (scrollY > windowHeight / 0.5 && scrollY < documentHeight - footerHeight - windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed right-5 top-1/2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:bg-opacity-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleMenu}
        >
          <span className="emoji text-3xl md:text-4xl animate-wiggle">🌍</span> 

          {isHovered && (
            <span className="absolute right-24 bg-green-200 text-black p-2 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100 w-48 md:w-64 text-center">
              Hello, I&apos;m Your <br />
              Green Energy Guide!😊
            </span>
          )}
        </div>
      )}

      {isMenuOpen && <div className="menu-overlay open" onClick={toggleMenu}></div>}
      <SlideOutButton isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  );
};

export default Overlay;

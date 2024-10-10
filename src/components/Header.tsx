import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-black">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-5">
        {/* Left Section: Logo and Company Name */}
        <div className="flex items-center ml-0"> {/* Remove margin-left */}
          <img src="/logo.png" alt="Company Logo" className="h-10" />
          <div className="ml-2">
            <h1 className="text-3xl md:text-4xl font-bold">New World</h1>
            <h2 className="text-lg md:text-xl">Better Environment, Happier Generation</h2>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="flex items-center">
          <Link href="/" className="mx-4 text-black hover:underline">Home</Link>
          <Link href="/about" className="mx-4 text-black hover:underline">About Us</Link>
          <Link href="/services" className="mx-4 text-black hover:underline">Services</Link>
          <Link href="/teams" className="mx-4 text-black hover:underline">Teams</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-5 bg-green-600 text-white">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="/logo.png" alt="Company Logo" className="h-10" />
        <div className="ml-2">
          <h1 className="text-3xl md:text-4xl font-bold">New World</h1>
          <h2 className="text-lg md:text-xl">Better Environment, Happier Generation</h2>
        </div>
      </div>
      <nav className="flex-1 text-center">
        <Link href="/" className="mx-4 text-white hover:underline">Home</Link>
        <Link href="/about" className="mx-4 text-white hover:underline">About Us</Link>
        <Link href="/services" className="mx-4 text-white hover:underline">Services</Link>
        <Link href="/teams" className="mx-4 text-white hover:underline">Teams</Link>
      </nav>
    </header>
  );
};

export default Header;

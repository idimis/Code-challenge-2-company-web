import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="Company Logo" className="h-10" />
        <div className="ml-2">
          <h1 className="text-2xl">New World</h1>
          <h2 className="text-xl">Better Environment, Happier Generation</h2>
        </div>
      </div>
      <nav className="flex-1 text-center">
        <Link href="/" className="mx-4">Home</Link>
        <Link href="/about" className="mx-4">About Us</Link>
        <Link href="/services" className="mx-4">Services</Link>
        <Link href="/teams" className="mx-4">Teams</Link>
      </nav>
    </header>
  );
};

export default Header;

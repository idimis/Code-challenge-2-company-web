import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="Company Logo" className="h-10" />
        <h1 className="ml-2 text-2xl">Renewable Energy Co.</h1>
      </div>
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About Us</Link>
        <Link href="/services" className="mr-4">Services</Link>
        <Link href="/teams">Teams</Link>
      </nav>
    </header>
  );
};

export default Header;

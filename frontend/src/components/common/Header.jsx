import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Ibrar</span>
          <span className="text-2xl font-bold text-secondary">
            International
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-primary font-medium transition">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-primary font-medium transition"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="hover:text-primary font-medium transition"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="hover:text-primary font-medium transition"
          >
            About Us
          </Link>
          <Link to="/contact" className="btn-primary text-sm py-2 px-4">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

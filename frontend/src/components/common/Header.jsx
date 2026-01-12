import { Link } from "react-router-dom";
import headerImg from "../../../Assets/header.png";

export default function Header() {
  return (
    <header
      className="text-white shadow-md sticky top-0 z-50"
      style={{
        backgroundColor: "#EAA221",
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">Ibrar</span>
          <span className="text-2xl font-bold text-white/90">
            International
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className="text-white hover:text-secondary font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-secondary font-medium transition"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-secondary font-medium transition"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-secondary font-medium transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="btn-secondary text-sm py-2 px-4 border-2 rounded-lg border-[#32174D]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-white">
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

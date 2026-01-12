import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Ibrar</span>{" "}
              <span className="text-secondary">International</span>
            </h3>
            <p className="text-gray-400">
              Premium rice and marble supplier with global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/products/rice"
                  className="hover:text-primary transition"
                >
                  Rice
                </Link>
              </li>
              <li>
                <Link
                  to="/products/marbles"
                  className="hover:text-primary transition"
                >
                  Marbles
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Export
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@ibrar.com</li>
              <li>Phone: +92 300 1234567</li>
              <li>
                <a
                  href="https://wa.me/923001234567"
                  className="hover:text-primary transition flex items-center gap-2"
                >
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Ibrar International. All rights reserved. | Premium
            Quality Since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sermons", path: "/sermons" },
    { name: "Announcements", path: "/announcements" },
    { name: "Prayers", path: "/prayers" },
    { name: "Programs", path: "/programs" },
    { name: "Media", path: "/media" },
    { name: "Livestream", path: "/livestream" },
    { name: "Giving", path: "/giving" },
  ];

  return (
    <nav className="bg-[#f8fafc] shadow-md fixed w-full top-0 left-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-[#1e3a8a] tracking-wide hover:text-[#334155] transition-colors duration-300"
        >
          Grace Community ⛪
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-[#b45309] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#1e3a8a] focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#f1f5f9] text-gray-800 shadow-md border-t border-gray-200 transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium hover:text-[#b45309] transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 bg-[#facc15] text-[#1e293b] font-semibold px-6 py-2 rounded-full hover:bg-[#fde68a] transition-all duration-300"
              >
                Join Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-white text-lg font-semibold">
            AsDeiva
          </a>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#About" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="text-white hover:text-gray-400">
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-gray-400">
              Skills
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full text-gray-400 bg-gray-900 bg-opacity-95">
            <div className="container mx-auto flex items-center justify-center h-full">
              <div className="text-white space-y-4 text-center">
                <a href="#About" className="block py-2 hover:text-gray-300">
                  Home
                </a>
                <a href="#projects" className="block py-2 hover:text-gray-300">
                  About
                </a>
                <a href="#skills" className="block py-2 hover:text-gray-300">
                  Services
                </a>
                <a href="#contact" className="block py-2 hover:text-gray-300">
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

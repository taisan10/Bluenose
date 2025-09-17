import React, { useState } from "react";
import logo from "../assets/logo 3.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50
      bg-gradient-to-r from-white via-gray-900 to-black
      text-white px-6 md:px-12 py-3 flex items-center justify-between shadow-md">
      
      {/* Logo + Text */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-14 md:h-20 lg:h-20 w-auto object-contain" // Bigger logo
        />
        <span className="font-bold text-lg  whitespace-nowrap">
          Bluenose Digital Marketing
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 font-medium text-xl">
        <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
        <li><a href="#brands" className="hover:text-yellow-400 transition">Brands</a></li>
        <li><a href="#services" className="hover:text-yellow-400 transition">Our Services</a></li>
        <li><a href="#process" className="hover:text-yellow-400 transition">Process</a></li>
        <li><a href="#whatwedo" className="hover:text-yellow-400 transition">What We Do</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-center md:hidden py-6 space-y-4 z-50">
          <a href="#home" className="block hover:text-yellow-400 transition">Home</a>
          <a href="#brands" className="block hover:text-yellow-400 transition">Brands</a>
          <a href="#services" className="block hover:text-yellow-400 transition">Our Services</a>
          <a href="#process" className="block hover:text-yellow-400 transition">Process</a>
          <a href="#whatwedo" className="block hover:text-yellow-400 transition">What We Do</a>
        </div>
      )}
    </nav>
  );
}

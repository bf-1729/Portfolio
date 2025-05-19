"use client";
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
    };
    loadAOS();
  }, []);

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Lakshmi Narasimha
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10 text-lg font-medium">
          {navItems.map((item) => (
            <AnchorLink
              key={item.name}
              href={item.href}
              offset="80"
              className="relative group text-white hover:text-cyan-300 transition duration-300"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </AnchorLink>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-gradient-to-br from-cyan-800 to-teal-700 text-white p-6 transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)}>
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/multiply.png"
              alt="Close"
              className="w-6"
            />
          </button>
        </div>

        <nav className="mt-10 flex flex-col space-y-6 text-lg font-semibold">
          {navItems.map((item) => (
            <AnchorLink
              key={item.name}
              href={item.href}
              offset="80"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-white/10 rounded px-4 py-2 transition duration-300"
            >
              {item.name}
            </AnchorLink>
          ))}
        </nav>
      </div>

      {/* Optional dark backdrop on mobile nav open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        ></div>
      )}
    </header>
  );
};

export default Navbar;

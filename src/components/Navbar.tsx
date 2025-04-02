"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import PopupForm from "./PopupForm";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const toogleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300  pt-2.5 ${
        scrolled ? "bg-white bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 py-8 flex justify-between items-center">
        <a
          href="/"
          className={`text-2xl font-bold flex items-center space-x-2 transition-all duration-300 ${
            scrolled ? "text-gray-900" : "text-gray-900"
          }`}
        >
          <span>LOGO</span>
        </a>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-6 md:space-x-10 items-center font-medium transition-all duration-300 ${
            scrolled ? "text-gray-700" : "text-gray-700"
          }`}
        >
          {["Home", "About", "Services", "Partners"].map((text, index) => (
            <div key={index} className="relative group">
              <a
                href={`#${text.toLowerCase()}`}
                className="hover:text-[#31a5dd] pb-2 block"
              >
                {text}
              </a>
            </div>
          ))}
          <a href="#get-started">
            <button
              onClick={() => setFormOpen(true)}
              className="bg-[#E11F26] text-white px-5 py-2 rounded-md hover:bg-[#1e8bbd] transition duration-300 cursor-pointer"
            >
              Get Started
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "text-gray-900" : "text-[#E11F26]"
          }`}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden bg-white h-[100vh] border-t border-gray-200 transition-all duration-500 overflow-hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100 py-2"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
            { href: "#partners", label: "Partners" },
            { href: "#get-started", label: "Get Started" },
          ].map((item, idx, array) => (
            <a
              key={idx}
              onClick={toogleMenu}
              href={item.href}
              className={`flex justify-between items-center py-3 px-4 hover:bg-gray-100 group 
          ${idx !== array.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <span>{item.label}</span>
              <span className="opacity-0 group-hover:opacity-100 transform transition-opacity duration-200">
                →
              </span>
            </a>
          ))}
        </div>
      )}

      <PopupForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </nav>
  );
};

export default Nav;

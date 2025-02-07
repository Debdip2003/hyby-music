import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import NavbarData from "../data/NavbarData";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300">
      {/* Logo */}
      <img
        src={isDarkMode ? logo_dark : logo}
        alt="logo"
        className="h-12 md:h-16"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {NavbarData.map((data) => (
          <NavLink
            key={data.id}
            to={data.disabled ? "" : data.path}
            className={({ isActive }) =>
              `text-lg hover:cursor-pointer transition-colors duration-300 ${
                isActive ? "underline underline-offset-3" : ""
              }`
            }
          >
            {data.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 md:hidden">
          {NavbarData.map((data) => (
            <NavLink
              key={data.id}
              to={data.disabled ? "" : data.path}
              className="block px-6 py-2 text-lg text-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {data.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* Search & Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <span className="bg-black p-1 rounded-full">
          <CiSearch className="text-2xl text-white" />
        </span>

        {/* Dark Mode Toggle Button */}
        <div
          className={`w-14 h-7 rounded-full relative transition-colors duration-300 hover:cursor-pointer ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
          onClick={toggleDarkMode}
        >
          <div
            className={`w-5 h-5 rounded-full absolute top-1 transition-all duration-300 ${
              isDarkMode ? "right-1 bg-black" : "left-1 bg-white"
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

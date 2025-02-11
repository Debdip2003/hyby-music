import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import NavbarData from "../data/NavbarData";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
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
        {/* Search Bar (Visible on Larger Screens) */}
        <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-200 dark:bg-gray-800">
          <NavLink to={"/search"}>
            {" "}
            <CiSearch className="text-2xl text-gray-600 dark:text-gray-300" />
          </NavLink>
        </div>

        {/* Search Icon (Mobile) */}
        <span className="md:hidden bg-black p-1 rounded-full">
          <NavLink to={"/search"}>
            {" "}
            <CiSearch className="text-2xl text-white" />
          </NavLink>
        </span>
        {/* Dark Mode Toggle Button */}
        <div
          className={`w-14 h-7 rounded-full relative transition-colors duration-300 hover:cursor-pointer ${
            isDarkMode ? "bg-gray-700" : "bg-black"
          }`}
          onClick={toggleDarkMode}
        >
          <div
            className={`w-6 h-6 rounded-full absolute top-0.5 transition-all duration-300 ${
              isDarkMode ? "right-1 bg-black" : "left-1 bg-white"
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

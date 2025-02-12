import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import AdminNavbarData from "../data/AdminNavbarData"; // Import Admin Navbar Data
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button"; // Import your Button component
import { useAuth } from "../hooks/useAuth";

const AdminNavbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  const navigate = useNavigate();
  const { logout } = useAuth();

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300">
      {/* Logo */}
      <NavLink to="/admin">
        <img
          src={isDarkMode ? logo_dark : logo}
          alt="logo"
          className="h-12 md:h-16"
        />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {AdminNavbarData.map((data) => (
          <NavLink
            key={data.id}
            to={data.disabled ? "" : data.path}
            className={() =>
              `text-lg hover:cursor-pointer transition-colors duration-300 `
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
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 md:hidden z-10">
          {AdminNavbarData.map((data) => (
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

      {/*  Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle Button */}
        <div
          className={`w-14 h-7 rounded-full relative transition-colors duration-300 hover:cursor-pointer ${
            isDarkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
          onClick={toggleDarkMode}
        >
          <div
            className={`w-6 h-6 rounded-full absolute top-0.5 transition-all duration-300 shadow-inner ${
              isDarkMode ? "right-1 bg-gray-900" : "left-1 bg-white"
            }`}
          ></div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="rounded-md bg-black text-white"
        >
          <Button>Logout</Button>
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;

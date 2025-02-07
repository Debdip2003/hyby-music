import { NavLink } from "react-router-dom";
import logo from "..//assets/logo.png";
import logo_dark from "..//assets/logo_dark.png";
import { CiSearch } from "react-icons/ci";
import NavbarData from "../data/NavbarData";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Get from localStorage
  });

  useEffect(() => {
    // Apply dark mode styles to the body when isDarkMode is true
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Save to localStorage
  };

  return (
    <div className="w-full flex items-center justify-between px-24 py-4 transition-colors duration-300">
      <img src={isDarkMode ? logo_dark : logo} alt="logo" className="h-16" />

      <div className="flex items-center space-x-8">
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

      <div className="flex items-center space-x-4">
        <span className="bg-black p-1 rounded-full">
          <CiSearch className="text-2xl text-white" />
        </span>

        {/* Dark Mode Toggle Button */}
        <div
          className={`w-14 h-7 rounded-full relative transition-colors duration-300 hover:cursor-pointer ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
          onClick={toggleDarkMode} //handle the toggle functionality
        >
          <div
            className={`w-5 h-5 rounded-full absolute top-1 transition-all duration-300 ${
              isDarkMode ? "right-1 bg-black" : "left-1 bg-white"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

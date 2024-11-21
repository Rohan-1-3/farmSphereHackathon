import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../customHooks/DarkModeContext";

export default function LandingPageNavBar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="flex sticky top-0 items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl">Farm Sphere</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/farming-tips"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Farming Tips
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weather-alert"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Weather Alert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Marketplace
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/soil-testing"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Soil Testing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loan"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Loan
          </NavLink>
        </li>
      </ul>

      {/* Right Section: Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

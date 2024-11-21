import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../customHooks/DarkModeContext";
import Logo from "../assets/logo.png"

export default function AppNavbar({ toggleCart, cartLength, isCartOpen }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Retrieve user type from sessionStorage
  const isFarmer = JSON.parse(sessionStorage.getItem("user")).isFarmer;

  return (
    <nav className="flex sticky z-50 top-0 items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl">Farm Sphere</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        {/* Show all links only if the user is a Farmer */}
        {isFarmer ? (
          <>
            <li>
              <NavLink
                to="/farming-news"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                }
              >
                Farming News
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
          </>
        ) : (
          /* Show only Marketplace link for other users */
          <></>
        )}
      </ul>

      {/* Right Section: Cart and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        {/* Cart Button */}
        <button
          onClick={toggleCart}
          className={`relative p-2 rounded-full ${
            isCartOpen
              ? "bg-blue-100 dark:bg-blue-800"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
          aria-label="Toggle Cart"
        >
          🛒
          {cartLength > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartLength}
            </span>
          )}
        </button>

        {/* Dark Mode Toggle */}
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
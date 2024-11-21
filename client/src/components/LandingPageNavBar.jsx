import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../customHooks/DarkModeContext";
import CallToActionButton from "./CallToActionButton";
import Logo from "../assets/logo.png"

export default function LandingPageNavBar({ toggleCart, cartLength, isCartOpen }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="flex sticky top-0 items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
      {/* Logo */}
      <NavLink to="/">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">Farm Sphere</span>
        </div>
      </NavLink>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Right Section: Cart, Get Started Button, & Dark Mode Toggle */}
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
          className="p-2 rounded-full z-999 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {/* Get Started Button */}
        <CallToActionButton />
      </div>
    </nav>
  );
}
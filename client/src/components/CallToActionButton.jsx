import React from 'react';
import { NavLink } from 'react-router-dom';

function CallToActionButton({ size = "medium" }) {
  // Define button sizes based on the prop
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base", // Default size
    large: "px-6 py-3 text-lg",
  };

  return (
    <NavLink
      to="/user"
      className={`bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ${sizeClasses[size]}`}
    >
      Get Started
    </NavLink>
  );
}

export default CallToActionButton;

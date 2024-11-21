import React from 'react';
import { NavLink } from 'react-router-dom';

function CallToActionButton(props) {
    return (
        <NavLink
          to="/get-started"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Get Started
        </NavLink>
    );
}

export default CallToActionButton;
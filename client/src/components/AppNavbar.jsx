import { NavLink, useNavigate } from "react-router-dom";
import { useDarkMode } from "../customHooks/DarkModeContext";
import Logo from "../assets/logo.png"

export default function AppNavbar({ setIsSignedIn }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Retrieve user type from sessionStorage
  const isFarmer = JSON.parse(sessionStorage.getItem("user")).isFarmer;
  const navigate = useNavigate();

  return (
    <nav className="flex sticky z-50 top-0 items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
      <NavLink to="/">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">Farm Sphere</span>
        </div>
      </NavLink>

      <ul className="flex space-x-6">
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
                to={`${isFarmer ? "/farmermarketplace" : "/marketplace"}`}
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

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-transparent dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
        <button
          onClick={()=>{
            sessionStorage.clear()
            setIsSignedIn(false)
            navigate("/")
          }}
          className="p-2 rounded-full bg-transparent dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          🚪
        </button>
      </div>
    </nav>
  );
}
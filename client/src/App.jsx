import { Outlet } from "react-router-dom";
import LandingPageNavBar from "./components/LandingPageNavBar";
import AppNavbar from "./components/AppNavbar";
import { useUserData } from "./customHooks/useUserData";

export default function App() {
  const userData = useUserData();
  const isSignedIn = sessionStorage.getItem("signedIn") === "true";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Conditionally render the navbar */}
      {isSignedIn ? 
        <AppNavbar  /> : 
        <LandingPageNavBar />}
      <main>
        <Outlet
          context={{
            userData: userData,
          }}
        />{" "}
        {/* This is where child routes will render */}
      </main>
    </div>
  );
}

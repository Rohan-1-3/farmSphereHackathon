import React from "react";
import { Outlet } from "react-router-dom";
import LandingPageNavBar from "./components/LandingPageNavBar";
import { useUserData } from "./customHooks/useUserData";

export default function App() {
  const userData = useUserData();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <LandingPageNavBar />
      <main>
        <Outlet context={
          {
            userData: userData
          }
        }/> {/* This is where child routes will render */}
      </main>
    </div>
  );
}

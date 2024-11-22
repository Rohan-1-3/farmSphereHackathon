import { Outlet } from "react-router-dom";
import LandingPageNavBar from "./components/LandingPageNavBar";
import AppNavbar from "./components/AppNavbar";
import { useUserData } from "./customHooks/useUserData";
import Footer from "./components/Home/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const userData = useUserData();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(()=>{
    setIsSignedIn(sessionStorage.getItem("signedIn"));
  },[])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Conditionally render the navbar */}
      {isSignedIn ? 
        <AppNavbar  setIsSignedIn={setIsSignedIn}/> : 
        <LandingPageNavBar />}
      <main>
        <Outlet
          context={{
            userData: userData,
            setIsSignedIn: setIsSignedIn
          }}
        />{" "}
        {/* This is where child routes will render */}
      </main>
      <Footer />
    </div>
  );
}

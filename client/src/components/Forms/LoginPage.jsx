import { useEffect, useState } from "react";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const setIsSignedIn = useOutletContext().setIsSignedIn;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.user) {
      sessionStorage.setItem("signedIn", true);
      sessionStorage.setItem("user", JSON.stringify(data.user))
      setIsSignedIn(true)
      if (sessionStorage.getItem("userType") === "Farmer") {
        navigate("/marketplace");
      } else {
        navigate("/marketplace");
      }
    } else {
      alert(data.error);
    }
  };

  useEffect(()=>{
    if(sessionStorage.getItem("signedIn")){
      const user = JSON.parse(sessionStorage.getItem("user"));
      if(user){
        navigate("/marketplace")
      }else{
        navigate("/marketplace")
      }
    }
  },[])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700 dark:text-gray-200">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-600 dark:text-gray-300 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full text-black dark:text-gray-100 dark:bg-black px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 dark:text-gray-300 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-black dark:text-gray-100 px-4 py-2 border border-gray-300 dark:bg-black dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>

  );
};

export default LoginPage;

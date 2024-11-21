import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IsFarmerPage = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleSelection = (type) => {
    setUserType(type);
  };

    useEffect(()=>{
        if(sessionStorage.getItem("signedIn")){
            navigate("/login")
        }
    },[])

  const handleContinue = () => {
    if (userType) {
      sessionStorage.setItem("userType", userType); 
      navigate("/signup"); 
    } else {
      alert("Please select an option before continuing!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
        Are you a Farmer or Consumer?
      </h1>
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => handleSelection("Farmer")}
          className={`px-8 py-4 font-semibold text-lg rounded-lg transition duration-200 ${
            userType === "Farmer"
              ? "bg-green-600 text-white opacity-50"
              : "bg-green-500 text-white hover:bg-green-600"
          } dark:bg-green-700 dark:hover:bg-green-800`}
        >
          Farmer
        </button>
        <button
          onClick={() => handleSelection("Consumer")}
          className={`px-8 py-4 font-semibold text-lg rounded-lg transition duration-200 ${
            userType === "Consumer"
              ? "bg-blue-600 text-white opacity-50"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } dark:bg-blue-700 dark:hover:bg-blue-800`}
        >
          Consumer
        </button>
      </div>
      <button
        onClick={handleContinue}
        className="px-8 py-4 bg-gray-800 text-white font-semibold text-lg rounded-lg hover:bg-gray-900 transition duration-200 dark:bg-gray-700 dark:hover:bg-gray-800"
      >
        Continue
      </button>
    </div>
  );
};

export default IsFarmerPage;

import React, { useEffect } from "react";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const items = [
    { id: 1, name: "Product 1", price: "$25", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$15", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$50", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$40", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$60", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", price: "$35", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: "$45", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Product 9", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Product 10", price: "$55", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Product 11", price: "$22", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Product 12", price: "$28", image: "https://via.placeholder.com/150" },
    { id: 13, name: "Product 13", price: "$33", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Product 14", price: "$37", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Product 15", price: "$48", image: "https://via.placeholder.com/150" }
];

  const navigate = useNavigate();

  useEffect(()=>{
    if(!sessionStorage.getItem("signedIn")){
      navigate("/user")
    }
  },[])

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md dark:bg-blue-800 text-center">
        <div className="flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold w-full">Marketplace</h1>
        </div>
      </header>
  
      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
  
};

export default Marketplace;

import React from "react";
import ItemCard from "./ItemCard";

const Marketplace = () => {
  const items = [
    { id: 1, name: "Product 1", price: "$25", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$15", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$50", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-black">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold">Marketplace</h1>
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

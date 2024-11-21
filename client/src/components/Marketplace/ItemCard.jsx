import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500">{item.price}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

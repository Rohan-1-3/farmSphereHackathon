import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import axios from 'axios';

const Marketplace = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')  // Backend API URL
      .then(response => {
        setItems(response.data);
        console.log(response.data)  // Store the fetched data in state
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);


  useEffect(() => {
    if (!sessionStorage.getItem("signedIn")) {
      navigate("/user");
    }
  }, [navigate]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (_id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
  };

  const handleChangeQuantity = (_id, operation) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === _id
          ? {
              ...item,
              quantity:
                operation === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsLoading(true);

    try {
      const userId = JSON.parse(sessionStorage.getItem("user")).id;
      console.log(userId)
      const orderData = cart.map((item) => ({
        userId: userId,
        productName: item.name,
        productId: item._id,
        quantity: item.quantity,
        price: item.price * item.quantity,
      }));

      const response = await fetch("http://localhost:5000/marketplace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Order submission failed");
      }

      setCart([]);
      alert("Checkout successful! Your order has been placed.");
    } catch (error) {
      console.error(error);
      alert("Error occurred while placing the order.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md dark:bg-blue-800">
        <div className="flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      {/* Cart Dropdown */}
      {isCartOpen && cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>
                  {item.name} x{item.quantity}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleChangeQuantity(item._id, "decrease")}
                    className="bg-gray-300 text-black py-1 px-2 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleChangeQuantity(item._id, "increase")}
                    className="bg-gray-300 text-black py-1 px-2 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded dark:bg-green-600 dark:hover:bg-green-700"
          >
            {isLoading ? "Processing..." : `Checkout (${cart.length})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Marketplace;

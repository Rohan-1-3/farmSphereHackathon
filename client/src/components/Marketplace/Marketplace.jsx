import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios

const Marketplace = () => {
  const [goods, setGoods] = useState([]);
  const [goodName, setGoodName] = useState('');
  const [goodPrice, setGoodPrice] = useState('');
  const [goodQuantity, setGoodQuantity] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);  // Added loading state
  const [error, setError] = useState(null);  // Added error state

  useEffect(() => {
    // Ensure that the user is in sessionStorage
    const user = sessionStorage.getItem("user");
    if (!user) {
      setError("User is not logged in.");
      setLoading(false);
      return;
    }

    axios.get('http://localhost:5000/api/farmergoods')  // Backend API URL
      .then(response => {
        const userId = JSON.parse(user).id;
        const filteredGoods = response.data.filter(data => data.userId === userId);
        setGoods(filteredGoods);  // Filter the goods based on the userId
        console.log(response.data);  // Log the data
        setLoading(false);  // Set loading to false once the data is fetched
      })
      .catch(error => {
        setError('There was an error fetching the products!');
        console.error('There was an error fetching the products!', error);
        setLoading(false);  // Set loading to false even if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Display loading text or spinner while data is being fetched
  }

  if (error) {
    return <div>{error}</div>;  // Display error message if there’s an issue fetching data
  }

  const handleAddOrUpdateGood = async () => {
    if (!goodName || !goodPrice || !goodQuantity) {
      alert('Please fill in all fields.');
      return;
    }

    const goodData = {
      product: goodName,
      price: parseFloat(goodPrice).toFixed(2),
      quantity: parseInt(goodQuantity, 10),
      userId: JSON.parse(sessionStorage.getItem("user")).id,
    };

    try {
      if (editingId !== null) {
        setGoods((prevGoods) =>
          prevGoods.map((good) =>
            good.id === editingId
              ? {
                  ...good,
                  name: goodName,
                  price: parseFloat(goodPrice).toFixed(2),
                  quantity: parseInt(goodQuantity, 10),
                }
              : good
          )
        );
        setEditingId(null);
      } else {
        // Make a POST request to save the good in the backend
        const response = await axios.post('http://localhost:5000/farmermarketplace', goodData);

        // Update the state with the new good returned from the backend
        setGoods((prevGoods) => [...prevGoods, response.data]);
      }

      // Clear input fields
      setGoodName('');
      setGoodPrice('');
      setGoodQuantity('');
    } catch (error) {
      console.error('Error adding or updating good:', error);
      alert('Error adding/updating good.');
    }
  };

  const handleEditGood = (id) => {
    const goodToEdit = goods.find((good) => good.id === id);
    setGoodName(goodToEdit.name);
    setGoodPrice(goodToEdit.price);
    setGoodQuantity(goodToEdit.quantity);
    setEditingId(id);
  };

  const handleDeleteGood = (id) => {
    const updatedGoods = goods.filter((good) => good.id !== id);
    setGoods(updatedGoods);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8">Farmers' Marketplace</h1>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {editingId !== null ? 'Edit Good' : 'Add Good'}
          </h2>
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Good Name"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              value={goodName}
              onChange={(e) => setGoodName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              className="w-32 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              value={goodPrice}
              onChange={(e) => setGoodPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantity"
              className="w-32 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              value={goodQuantity}
              onChange={(e) => setGoodQuantity(e.target.value)}
            />
            <button
              className={`${
                editingId !== null ? 'bg-green-500' : 'bg-blue-500'
              } text-white px-6 py-2 rounded-md transition`}
              onClick={handleAddOrUpdateGood}
            >
              {editingId !== null ? 'Update Good' : 'Add Good'}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Goods</h2>
          {goods.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No goods available. Add some to get started!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {goods.map((good) => (
                <div
                  key={good.id}
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 hover:shadow-2xl"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                      {good.name}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Price:</span> ${good.price}
                    </p>
                    <p className="text-lg">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Quantity:</span> {good.quantity}
                    </p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <button
                      className="flex-1 bg-yellow-500 dark:bg-yellow-600 text-white px-4 py-2 rounded-md"
                      onClick={() => handleEditGood(good.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="flex-1 bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-md"
                      onClick={() => handleDeleteGood(good.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;

const ItemCard = ({ item, handleAddToCart, handleChangeQuantity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:shadow-gray-700">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold dark:text-white">{item.name}</h3>
        <p className="text-gray-500 dark:text-gray-400">
          ${item.price.toFixed(2)}
        </p>
        <div className="flex items-center mt-4">
          <button
            onClick={() => handleAddToCart(item)}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 mr-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

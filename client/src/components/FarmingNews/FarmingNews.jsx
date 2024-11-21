import React from 'react';

// Data arrays for each category
const governmentTaxesData = [
  {
    title: "New Tax Policy for Farmers",
    description: "The government has introduced new tax policies to support small-scale farmers.",
    imageUrl: "https://example.com/tax-policy.jpg"
  },
  {
    title: "Tax Exemption for Organic Farms",
    description: "Organic farms will now be exempt from certain taxes to encourage sustainable farming.",
    imageUrl: "https://example.com/organic-tax-exemption.jpg"
  }
];

const farmingNewsData = [
  {
    title: "Sustainable Farming Practices",
    description: "Learn how sustainable farming practices can help increase yield and preserve the environment.",
    imageUrl: "https://example.com/sustainable-farming.jpg"
  },
  {
    title: "Weather Forecast for Farmers",
    description: "Farmers need to stay updated on the weather to plan their crops effectively. Here's the latest forecast.",
    imageUrl: "https://example.com/weather-forecast.jpg"
  }
];

const marketPricesData = [
  {
    title: "Tomato Market Prices Rise",
    description: "The price of tomatoes has increased due to lower production rates this season.",
    imageUrl: "https://example.com/tomato-price.jpg"
  },
  {
    title: "Potato Prices Stabilize",
    description: "Potato prices have stabilized after fluctuating over the past few months.",
    imageUrl: "https://example.com/potato-price.jpg"
  }
];

const FarmingNews = () => {
  const renderSection = (title, data) => (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <img src={item.imageUrl} alt={item.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Farming News</h1>

      {/* Render different sections */}
      {renderSection("Government Taxes", governmentTaxesData)}
      {renderSection("Farming News", farmingNewsData)}
      {renderSection("Market Prices of Vegetables", marketPricesData)}
    </div>
  );
};

export default FarmingNews;

const governmentTaxesData = [
    {
      title: "New Tax Policy for Farmers",
      description: "The government has introduced new tax policies to support small-scale farmers.",
      imageUrl: "https://example.com/tax-policy.jpg",
      link: "https://example.com/tax-policy"
    },
    {
      title: "Tax Exemption for Organic Farms",
      description: "Organic farms will now be exempt from certain taxes to encourage sustainable farming.",
      imageUrl: "https://example.com/organic-tax-exemption.jpg",
      link: "https://example.com/organic-tax-exemption"
    },
    {
      title: "Tax Incentives for Small Scale Farmers",
      description: "Small-scale farmers will receive tax incentives to help with the financial challenges posed by climate change.",
      imageUrl: "https://example.com/small-farmers-incentives.jpg",
      link: "https://example.com/small-farmers-incentives"
    },
    {
      title: "Government Increases Tax on Pesticides",
      description: "A new tax has been introduced on pesticides to promote organic farming and reduce environmental harm.",
      imageUrl: "https://example.com/pesticide-tax.jpg",
      link: "https://example.com/pesticide-tax"
    },
    {
      title: "Farmers’ Tax Rates Cut for 2024",
      description: "The government announces a reduction in tax rates for farmers in the 2024 budget to boost agricultural growth.",
      imageUrl: "https://example.com/farmers-tax-cuts.jpg",
      link: "https://example.com/farmers-tax-cuts"
    }
  ];
  
  const farmingNewsData = [
    {
      title: "Sustainable Farming Practices",
      description: "Learn how sustainable farming practices can help increase yield and preserve the environment.",
      imageUrl: "https://example.com/sustainable-farming.jpg",
      link: "https://example.com/sustainable-farming"
    },
    {
      title: "Weather Forecast for Farmers",
      description: "Farmers need to stay updated on the weather to plan their crops effectively. Here's the latest forecast.",
      imageUrl: "https://example.com/weather-forecast.jpg",
      link: "https://example.com/weather-forecast"
    },
    {
      title: "Top 5 Eco-Friendly Farming Techniques",
      description: "Eco-friendly farming techniques are gaining popularity. Find out which ones are the most beneficial.",
      imageUrl: "https://example.com/eco-farming-techniques.jpg",
      link: "https://example.com/eco-farming-techniques"
    },
    {
      title: "Farmers Prepare for Summer Heat",
      description: "Farmers are preparing for a long summer heatwave with strategies to protect crops and conserve water.",
      imageUrl: "https://example.com/farmers-prepare-summer.jpg",
      link: "https://example.com/farmers-prepare-summer"
    },
    {
      title: "The Future of Vertical Farming",
      description: "Vertical farming is revolutionizing agriculture in urban areas. Learn about its potential and growth prospects.",
      imageUrl: "https://example.com/vertical-farming.jpg",
      link: "https://example.com/vertical-farming"
    }
  ];
  
  const marketPricesData = [
    {
      title: "Tomato Market Prices Rise",
      description: "The price of tomatoes has increased due to lower production rates this season.",
      imageUrl: "https://example.com/tomato-price.jpg",
      link: "https://example.com/tomato-price"
    },
    {
      title: "Potato Prices Stabilize",
      description: "Potato prices have stabilized after fluctuating over the past few months.",
      imageUrl: "https://example.com/potato-price.jpg",
      link: "https://example.com/potato-price"
    },
    {
      title: "Onion Prices Surge Amid Shortages",
      description: "Onion prices have surged as a result of unexpected weather conditions affecting harvests.",
      imageUrl: "https://example.com/onion-price.jpg",
      link: "https://example.com/onion-price"
    },
    {
      title: "Cucumber Prices Fall Due to High Supply",
      description: "Cucumber prices have dropped this season as production levels have significantly increased.",
      imageUrl: "https://example.com/cucumber-price.jpg",
      link: "https://example.com/cucumber-price"
    },
    {
      title: "Carrot Prices Up as Demand Increases",
      description: "The demand for carrots has risen, leading to an increase in market prices this month.",
      imageUrl: "https://example.com/carrot-price.jpg",
      link: "https://example.com/carrot-price"
    }
  ];  

const FarmingPage = () => {
  const renderSection = (title, data) => (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <img src={item.imageUrl} alt={item.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  {item.title}
                </a>
              </h3>
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
      
      {renderSection("Government Taxes", governmentTaxesData)}
      {renderSection("Farming News", farmingNewsData)}
      {renderSection("Market Prices of Vegetables", marketPricesData)}
    </div>
  );
};

export default FarmingPage;

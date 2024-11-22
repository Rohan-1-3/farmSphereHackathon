import pic1 from '../../assets/m.jpg';
import pic2 from '../../assets/M.webp';

import pic3 from '../../assets/premium_photo-1661962692059-55d5a4319814.avif';

import pic4 from '../../assets/s.jpg';

import pic5 from '../../assets/smart-series-img.jpg';

import pic6 from '../../assets/g.jpg';

import pic7 from '../../assets/hero-image.jpg';






const governmentTaxesData = [
    {
      title: "New Tax Policy for Farmers",
      description: "The government has introduced new tax policies to support small-scale farmers.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1678374802947-ad2d80cff2e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRheGVzfGVufDB8fDB8fHww",
      link: "https://example.com/tax-policy"
    },
    {
      title: "Tax Exemption for Organic Farms",
      description: "Organic farms will now be exempt from certain taxes to encourage sustainable farming.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1678751640165-38e3ff1999c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      link: "https://example.com/organic-tax-exemption"
    },
    {
      title: "Tax Incentives for Small Scale Farmers",
      description: "Small-scale farmers will receive tax incentives to help with the financial challenges posed by climate change.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661420226112-311050ce30da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybWVyfGVufDB8fDB8fHww",
      link: "https://example.com/small-farmers-incentives"
    },
    {
      title: "Government Increases Tax on Pesticides",
      description: "A new tax has been introduced on pesticides to promote organic farming and reduce environmental harm.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661311870919-415927d391df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF4JTIwcmF0ZXxlbnwwfHwwfHx8MA%3D%3Dhttps://www.fraserinstitute.org/sites/default/files/marginal-effective-tax-rates-infographic.jpg",
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
      imageUrl: pic5,
      link: "https://example.com/tomato-price"
    },
    {
      title: "Potato Prices Stabilize",
      description: "Potato prices have stabilized after fluctuating over the past few months.",
      imageUrl: pic4,
      link: "https://example.com/potato-price"
    },
    {
      title: "Onion Prices Surge Amid Shortages",
      description: "Onion prices have surged as a result of unexpected weather conditions affecting harvests.",
      imageUrl: pic3,
      link: "https://example.com/onion-price"
    },
    {
      title: "Cucumber Prices Fall Due to High Supply",
      description: "Cucumber prices have dropped this season as production levels have significantly increased.",
      imageUrl: pic2,
      link: "https://example.com/cucumber-price"
    },
    {
      title: "Carrot Prices Up as Demand Increases",
      description: "The demand for carrots has risen, leading to an increase in market prices this month.",
      imageUrl: pic1,
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

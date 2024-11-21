import { useState, useEffect } from "react";
import WeatherForecast from "./WeatherForecast";
import FarmingInsights from "./FarmingInsights";
import LocationSearch from "./LocationSearch";

const Weather = () => {
  const [forecastData, setForecastData] = useState([]);
  const [farmingInsights, setFarmingInsights] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async (loc) => {
    setLocation(loc);
  };

  useEffect(() => {
    // if (location) {
    //   (async () => {
    //     const weather = await fetchWeatherData(location);
    //     setForecastData(weather);

    //     const insights = await fetchFarmingInsights(weather);
    //     setFarmingInsights(insights);
    //   })();
    // }
  }, [location]);

  return (
    <div className="app">
      <h1>Farming Weather Advisor</h1>
      <LocationSearch onSearch={handleSearch} />
      {forecastData.length > 0 && <WeatherForecast forecastData={forecastData} />}
      {farmingInsights && <FarmingInsights insights={farmingInsights} />}
    </div>
  );
};

export default Weather;

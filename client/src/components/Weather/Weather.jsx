import { useState } from "react";

const WeatherTips = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeatherTips = async (event) => {
    event.preventDefault();
    const form = event.target;
    const index = form.dayInput.value || 0;

    setLoading(true);
    setError(null);
    setForecast(null);
    if(index > 5){
      setError("Choose number less than equal to 5.")
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/weather-alert?index=${index}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.text();

      // Split the result into sections
      let [date, avgTemp, maxTemp, avgHumidity, condition, ...suggestions] = result.split(",");
      suggestions = suggestions.join("")
      setForecast({ date, avgTemp, maxTemp, avgHumidity, condition, suggestions });
    } catch (err) {
      setError("Failed to fetch weather tips. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-tips-container text-black bg-gray-100 min-h-screen py-10">
      <Header />
      <form onSubmit={fetchWeatherTips} className="max-w-md mx-auto p-4 bg-white rounded shadow">
        <label htmlFor="dayInput" className="block text-gray-700 font-semibold mb-2">
          Select Days Forward:
        </label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            id="dayInput"
            name="dayInput"
            className="block w-full p-2 border rounded shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            min="0"
            placeholder="Enter days (e.g., 0 for today)"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Get Forecast
          </button>
        </div>
      </form>

      <div className="forecast-output max-w-2xl mx-auto mt-6">
        {loading && (
          <div className="text-center text-gray-600">
            <p>Loading weather tips...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        )}
        {forecast && (
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Weather Forecast</h2>
            <ul className="text-gray-700">
              <li>
{forecast.date}
              </li>
              <li>
                {forecast.avgTemp}
              </li>
              <li>
                {forecast.maxTemp}
              </li>
              <li>
                {forecast.avgHumidity}
              </li>
              <li>
                {forecast.condition}
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 text-indigo-600">Farming Tips</h3>
            <p>{forecast.suggestions}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = () => (
  <header className="text-center mb-6">
    <h1 className="text-3xl font-bold text-indigo-700">Weather Forecast Advisor</h1>
    <p className="text-gray-600">Get weather forecasts and personalized farming tips!</p>
  </header>
);

export default WeatherTips;

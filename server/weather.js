require('dotenv').config(); // Ensure dotenv is installed and required at the top

const axios = require("axios");

async function getLocation() {
  try {
    const response = await axios.get("http://ip-api.com/json/");
    const { lat, lon, city, region, country } = response.data;
    return { lat, lon, city, region, country };
  } catch (error) {
    console.error("Error fetching location:", error);
    throw new Error("Location fetch failed");
  }
}

const forecast = async () => {
  try {
    let { lat, lon } = await getLocation();
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}` // Using environment variable
    );
    let data = await response.json();

    let dailyForecast = {};
    let forecastArray = []; // Array to store the processed forecast data

    // Group data by date and aggregate values
    data.list.forEach((item) => {
      let date = item.dt_txt.split(" ")[0]; // Extract the date part (YYYY-MM-DD)

      if (!dailyForecast[date]) {
        dailyForecast[date] = {
          temperatures: [],
          weather: [],
          humidity: [],
          rainProbability: [],
        };
      }

      // Push values for each day
      dailyForecast[date].temperatures.push(item.main.temp - 273.15); // Convert temp from Kelvin to Celsius
      dailyForecast[date].weather.push(item.weather[0].description);
      dailyForecast[date].humidity.push(item.main.humidity);
      dailyForecast[date].rainProbability.push(item.pop || 0); // Probability of rain (default to 0 if not available)
    });

    // Process daily forecast and add to forecastArray
    for (let date in dailyForecast) {
      let temps = dailyForecast[date].temperatures;
      let weather = dailyForecast[date].weather;
      let humidity = dailyForecast[date].humidity;

      let avgTemp = (
        temps.reduce((a, b) => a + b, 0) / temps.length
      ).toFixed(2);
      let maxTemp = Math.max(...temps).toFixed(2);
      let avgHumidity = (
        humidity.reduce((a, b) => a + b, 0) / humidity.length
      ).toFixed(2);
      let weatherCondition = weather[0]; // First occurrence as representative condition

      // Add the processed data to forecastArray
      forecastArray.push({
        date: date,
        avgTemperature: avgTemp,
        maxTemperature: maxTemp,
        avgHumidity: avgHumidity,
        weatherCondition: weatherCondition,
      });
    }

    return forecastArray; // Return the array for later use
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw new Error("Forecast fetch failed");
  }
};

module.exports = forecast;

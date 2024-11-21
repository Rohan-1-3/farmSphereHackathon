import React from "react";

const WeatherForecast = ({ forecastData }) => {
  return (
    <div className="weather-forecast">
      <h2>7-Day Weather Forecast</h2>
      <ul>
        {forecastData.map((day, index) => (
          <li key={index}>
            <p>{day.date}</p>
            <p>Temperature: {day.temperature}°C</p>
            <p>Precipitation: {day.precipitation}%</p>
            <p>Humidity: {day.humidity}%</p>
            <p>Wind: {day.windSpeed} km/h</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;

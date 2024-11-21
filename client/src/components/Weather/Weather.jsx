import { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [aiData, setAiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherAndAiData = async () => {
      setLoading(true);
      try {
        const weatherResponse = await fetch('http://localhost:5000/weather-alert');
        
        if (!weatherResponse.ok) {
          throw new Error(`Error: ${weatherResponse.status}`);
        }
  
        // Check the response as text first
        const responseText = await weatherResponse.text();
        console.log('Response Text:', responseText);
  
        // Split the response into lines
        const lines = responseText.split('\n');
  
        // Extract weather data (first part)
        const weatherDataString = lines.slice(0, 5).join('\n').trim();  // First 5 lines are weather data
        console.log(weatherDataString)
        // Extract AI suggestions (second part)
        const aiSuggestionsString = lines.slice(5).join('\n').trim(); // All lines after the first 5 are AI suggestions
  
        // Set the parsed data
        setWeatherData(weatherDataString);
        setAiData(aiSuggestionsString);
  
        console.log('Weather Data:', weatherDataString);
        console.log('AI Suggestions:', aiSuggestionsString);
        
      } catch (err) {
        console.error('Error fetching data:', err);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };    
  
    fetchWeatherAndAiData();
  }, []);
  
   // Empty dependency array ensures it runs once on mount

  // Loading state
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div className="spinner" /> {/* Add your spinner component */}
        <p>Loading weather and farming suggestions...</p>
      </div>
    );
  }

  // Error handling
  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <MainContent weatherData={weatherData} aiData={aiData} />
    </div>
  );
};

const Header = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>Farming Weather Advisor</h1>
      <p>The ultimate guide to farming based on weather data!</p>
    </div>
  );
};

const MainContent = ({ weatherData, aiData }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Weather Section */}
        <div style={{ width: '48%', padding: '10px', border: '1px solid #ddd' }}>
          <h2>Weather Forecast</h2>
          {weatherData ? (
            <>
              <p>{weatherData}</p>
            </>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
        
        {/* Farming Suggestions Section */}
        <div style={{ width: '48%', padding: '10px', border: '1px solid #ddd' }}>
          <h2>Farming Suggestions</h2>
          {aiData ? <p>{aiData}</p> : <p>Loading farming suggestions...</p>}
        </div>
      </div>
    </div>
  );
};

export default Weather;

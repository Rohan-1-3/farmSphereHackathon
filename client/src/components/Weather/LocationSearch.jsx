import React, { useState } from "react";

const LocationSearch = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="location-search">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationSearch;

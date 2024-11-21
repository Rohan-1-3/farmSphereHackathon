import React from "react";

const FarmingInsights = ({ insights }) => {
  return (
    <div className="farming-insights">
      <h2>Farming Insights</h2>
      <p>{insights ? insights : "Loading AI suggestions..."}</p>
    </div>
  );
};

export default FarmingInsights;

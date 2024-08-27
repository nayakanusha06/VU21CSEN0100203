import React from 'react';

const AverageDisplay = ({ average }) => {
  return (
    <div className="average-display">
      <h3>Average</h3>
      <p>{average !== null ? average : 'N/A'}</p>
    </div>
  );
};

export default AverageDisplay;

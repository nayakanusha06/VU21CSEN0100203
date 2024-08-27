import React from 'react';

const NumberDisplay = ({ windowPrevState, windowCurrState }) => {
  return (
    <div className="number-display">
      <h3>Previous State</h3>
      <p>{windowPrevState.join(', ')}</p>
      <h3>Current State</h3>
      <p>{windowCurrState.join(', ')}</p>
    </div>
  );
};

export default NumberDisplay;

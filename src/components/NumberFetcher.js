import React from 'react';

const NumberFetcher = ({ fetchNumbers }) => {
  return (
    <div className="number-fetcher">
      <h3>Fetch Numbers</h3>
      <select id="number-type">
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={() => fetchNumbers(document.getElementById('number-type').value)}>
        Fetch
      </button>
    </div>
  );
};

export default NumberFetcher;

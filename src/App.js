import React, { useState } from 'react';
import Header from './components/Header';
import NumberFetcher from './components/NumberFetcher';
import NumberDisplay from './components/NumberDisplay';
import AverageDisplay from './components/AverageDisplay';
import './App.css';

function App() {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [average, setAverage] = useState(null);

  const fetchNumbers = async (type) => {
    try {
      const response = await fetch(`http://localhost:9876/numbers/${type}`);
      if (response.ok) {
        const data = await response.json();
        setWindowPrevState([...windowCurrState]);
        setWindowCurrState([...data.windowCurrState]);
        setAverage(data.avg);
      }
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <NumberFetcher fetchNumbers={fetchNumbers} />
      <NumberDisplay windowPrevState={windowPrevState} windowCurrState={windowCurrState} />
      <AverageDisplay average={average} />
    </div>
  );
}

export default App;

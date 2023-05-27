import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

  const toggleBackground = () => {
    setIsBackgroundDark(!isBackgroundDark);
  };

  const backgroundColor = isBackgroundDark ? 'black' : 'white';
  const textColor = isBackgroundDark ? 'white' : 'black';

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1>Background Toggle</h1>
      <button onClick={toggleBackground}>Toggle Background</button>
    </div>
  );
};

export default App;

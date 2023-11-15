// App.js
import React, { useState } from 'react';
import ShoppingList from './ShoppingList';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
};

export default App;

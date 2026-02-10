import React from 'react';
import './App.css';
import PartsSearch from './components/PartsSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚗 Car Upgrade App</h1>
        <p>Find the cheapest car parts and upgrades for your vehicle</p>
      </header>
      <main className="App-main">
        <PartsSearch />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Car Upgrade App. Find budget-friendly car parts for Kia, Hyundai, Toyota, Honda and more.</p>
      </footer>
    </div>
  );
}

export default App;

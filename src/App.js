import React, { useState } from "react";
import players from "./players";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="header">
  <h1>Famous Football Players</h1>
  <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "☀️ Day Mode" : "🌙 Night Mode"}
  </button>
</header>


      {/* Players */}
      <div className="players-container">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.imageUrl} alt={player.name} />
            <h2>{player.name}</h2>
            <p>Team: {player.team}</p>
            <p>Nationality: {player.nationality}</p>
            <p>Jersey Number: {player.jerseyNumber}</p>
            <p>Age: {player.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;




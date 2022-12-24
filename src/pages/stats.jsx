import { useState } from "react";

function StatsPage() {
  const [playerName, setPlayerName] = useState("");
  const [playerStats, setPlayerStats] = useState(null);

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedPlayerName = playerName.replace("#", "-");
    const response = await fetch(
      `https://overfast-api.tekrop.fr/players/${formattedPlayerName}/summary`
    );
    const data = await response.json();
    setPlayerStats(data);
  };

  return (
    <div>
      <h1>Statistiques des joueurs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pseudo :
          <input type="text" value={playerName} onChange={handleInputChange} />
        </label>
        <button type="submit">Rechercher</button>
      </form>
      {playerStats && (
        <div>
          <h2>Statistiques de {playerStats.name}</h2>
          <p>Niveau : {playerStats.level}</p>
          <p>Score de compétence : {playerStats.skillRating}</p>
        </div>
      )}
    </div>
  );
}

export default StatsPage;

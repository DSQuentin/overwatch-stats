export async function getHeroes() {
  const response = await fetch("https://overfast-api.tekrop.fr/heroes");
  const data = await response.json();
  return data;
}

const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await fetch(
    `https://overfast-api.tekrop.fr/stats/${playerName}`
  );
  const data = await response.json();
  // stocker les stats du joueur dans l'état local
  setPlayerStats(data);
};

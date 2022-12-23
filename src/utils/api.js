export async function getHeroes() {
  const response = await fetch("https://overfast-api.tekrop.fr/heroes");
  const data = await response.json();
  return data;
}

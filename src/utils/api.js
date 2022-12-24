export async function getHeroes() {
  const response = await fetch(
    "https://overfast-api.tekrop.fr/heroes?locale=fr-fr"
  );
  const data = await response.json();
  return data;
}

export async function getRoles() {
  const response = await fetch("https://overfast-api.tekrop.fr/roles");
  const data = await response.json();
  return data;
}

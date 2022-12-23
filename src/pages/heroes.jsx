import { getHeroes } from "@/utils/api";
import { useEffect, useState } from "react";

export default function HeroesPage() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getHeroes();
      setHeroes(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des héros</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
}

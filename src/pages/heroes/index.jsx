import { getHeroes, getRoles } from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroesPage() {
  const [heroes, setHeroes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getHeroes();
      setHeroes(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await getRoles();
      setRoles(data);
    }
    fetchData();
  }, []);

  const filteredHeroes = selectedRole
    ? heroes.filter((hero) => hero.role === selectedRole)
    : heroes;

  console.log(filteredHeroes);
  console.log(selectedRole);

  return (
    <div>
      <h1>Liste des héros</h1>
      <div>
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role.name.toLowerCase())}
            className={selectedRole === role.name ? "bg-gray-200" : ""}
          >
            {role.name}
          </button>
        ))}
        <button onClick={() => setSelectedRole(null)}>Tous</button>
      </div>

      <div className="flex justify-around flex-wrap">
        {filteredHeroes.map((hero) => (
          <div key={hero.id} className="mb-2">
            <p>{hero.name}</p>
            <img src={hero.portrait} alt={hero.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

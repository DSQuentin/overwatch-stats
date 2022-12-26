/* eslint-disable @next/next/no-img-element */
import { getHeroes, getRoles } from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroesPage() {
  const [heroes, setHeroes] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const [heroesData, rolesData] = await Promise.all([
        getHeroes(),
        getRoles(),
      ]);
      setHeroes(heroesData);
      setRoles(rolesData);
    }
    fetchData();
  }, []);

  const [roles, setRoles] = useState([]);

  const filteredHeroes = selectedRole
    ? heroes.filter((hero) => hero.role === selectedRole)
    : heroes;

  console.log(roles);

  function getRoleIconUrl(roleName) {
    const role = roles.find(
      (r) => r.name.toLowerCase() === roleName.toLowerCase()
    );
    console.log(role);
    return role ? role.icon : "";
  }

  return (
    <div>
      <h1>Liste des héros</h1>
      <div>
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role.name.toLowerCase())}
            className={
              selectedRole === role.name.toLowerCase()
                ? "bg-gray-700 mx-2 "
                : "bg-gray-500 mx-2 "
            }
          >
            <img
              src={getRoleIconUrl(role.name)}
              className="p-4"
              alt={role.name}
            />
          </button>
        ))}
        <button
          onClick={() => setSelectedRole(null)}
          className={selectedRole === null ? "bg-gray-200" : ""}
        >
          Tous
        </button>
      </div>

      <div className="flex justify-between flex-wrap">
        {filteredHeroes.map((hero) => (
          <Link key={hero.key} href={`/heroes/${hero.key}`}>
            <div>
              <p>{hero.name}</p>
              <img src={hero.portrait} alt={hero.name} />
              <img
                src={getRoleIconUrl(hero.role)}
                className="bg-gray-700 p-4"
                alt={hero.role}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

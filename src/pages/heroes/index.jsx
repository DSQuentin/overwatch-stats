/* eslint-disable @next/next/no-img-element */
import HeroesCard from "@/components/HeroesCard";
import RolesFilter from "@/components/RolesFilter";
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

  console.log(heroes);
  const [roles, setRoles] = useState([]);

  function getRoleIconUrl(roleName) {
    const role = roles.find(
      (r) => r.name.toLowerCase() === roleName.toLowerCase()
    );
    return role ? role.icon : "";
  }

  const filteredHeroes = selectedRole
    ? heroes.filter((hero) => hero.role === selectedRole)
    : heroes;

  return (
    <div className="my-12 mx-24">
      <h1 className="text-center text-5xl text-customBlack">HÉROS</h1>
      <div className="flex items-center justify-between">
        <RolesFilter
          roles={roles}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          getRoleIconUrl={getRoleIconUrl}
        />
        <Link
          href="/"
          className="text-customBlack hover:text-black bg-gray-200 hover:bg-gray-300 border-2 rounded-sm border-white px-8 py-2.5 text-center inline-flex items-center mr-2 mb-2 gap-2 text-lg"
        >
          Retour
        </Link>
      </div>

      <div className="flex justify-center flex-wrap gap-4">
        {filteredHeroes.map((hero) => (
          <Link key={hero.key} href={`/heroes/${hero.key}`}>
            <HeroesCard
              name={hero.name}
              role={hero.role}
              portrait={hero.portrait}
              getRoleIconUrl={getRoleIconUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

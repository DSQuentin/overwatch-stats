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

  const [roles, setRoles] = useState([]);

  function getRoleIconUrl(roleName) {
    const role = roles.find(
      (r) => r.name.toLowerCase() === roleName.toLowerCase()
    );
    console.log(role);
    return role ? role.icon : "";
  }

  const filteredHeroes = selectedRole
    ? heroes.filter((hero) => hero.role === selectedRole)
    : heroes;

  return (
    <div className="m-12">
      <h1 className="text-center text-7xl text-customBlack">Liste des héros</h1>
      <div>
        <RolesFilter
          roles={roles}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          getRoleIconUrl={getRoleIconUrl}
        />
        <Link href="/" className="ml-2">
          Retour
        </Link>
      </div>

      <div className="flex justify-between flex-wrap">
        {filteredHeroes.map((hero) => (
          <HeroesCard
            key={hero.key}
            name={hero.name}
            role={hero.role}
            portrait={hero.portrait}
            roles={roles}
            getRoleIconUrl={getRoleIconUrl}
          />
        ))}
      </div>
    </div>
  );
}

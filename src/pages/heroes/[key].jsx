/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import LoadingHeroPage from "@/components/LoadingHeroPage";
import { getHeroData, getRoles } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HeroPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hero, setHero] = useState({});
  const [roles, setRoles] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [showAbilities, setShowAbilities] = useState(false);

  function toggleAbilities() {
    setShowAbilities(!showAbilities);
  }

  const router = useRouter();
  const { key } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const [heroData, rolesData] = await Promise.all([
          getHeroData(key),
          getRoles(),
        ]);
        setHero(heroData);
        setRoles(rolesData);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [key]);

  useEffect(() => {
    if (hero.abilities) {
      setAbilities(hero.abilities);
    }
  }, [hero, key]);

  function getRoleIconUrl(roleName) {
    const role = roles.find(
      (r) => r.name.toLowerCase() === roleName.toLowerCase()
    );
    return role ? role.icon : "";
  }

  if (isLoading) {
    return <LoadingHeroPage />;
  }

  return (
    <>
      <div className="m-12 border-2 p-4 border-orange-400">
        <h1>{hero.name}</h1>
        <img src={hero.portrait} alt={hero.name} />
        <p>Description : {hero.description}</p>
        <p>Lieu : {hero.location}</p>
        <p>
          Role :{" "}
          <img
            src={getRoleIconUrl(hero.role)}
            className="bg-gray-700 p-4"
            alt={hero.role}
          />
        </p>
        <p>Compétences :</p>
        <ul className="flex gap-4">
          {abilities.map((ability) => (
            <li key={ability.id}>
              <img
                src={ability.icon}
                className="border-2 border-orange-400 bg-gray-400"
                alt={ability.name}
                onClick={toggleAbilities}
              />
              {ability.name}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/heroes">Retour</Link>
    </>
  );
}

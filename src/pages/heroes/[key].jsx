/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { getHeroData } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function HeroPage() {
  const [hero, setHero] = useState({});
  const router = useRouter();
  const { key } = router.query;

  useEffect(() => {
    async function fetchData() {
      const data = await getHeroData(key);
      setHero(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>{hero.name}</h1>
        <img src={hero.portrait} alt={hero.name} />
        <p>Description : {hero.description}</p>
        <p>Lieu : {hero.location}</p>
        <p>Role : {hero.role}</p>
      </div>
      <Link href="/heroes">Retour</Link>
    </>
  );
}

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
  }, [key]);

  console.log(hero);

  return (
    <>
      <div>
        <h1>{hero.name}</h1>
        <img src={hero.portrait} alt={hero.name} />
        <p>{hero.description}</p>
        <p>{hero.role}</p>
        <p>{hero.story.summary}</p>
      </div>
      <Link href="/heroes">Retour</Link>
    </>
  );
}

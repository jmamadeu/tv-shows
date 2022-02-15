import { useGetDefaultTVShowQuery } from "./app/features/tv-shows";

function Home() {
  const { data } = useGetDefaultTVShowQuery();

  console.log(data);

  return <h1>TV shows</h1>;
}

export { Home };

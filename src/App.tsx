import { useGetDefaultTVShowQuery } from "./app/features/tv-shows";

function App() {
  const { data } = useGetDefaultTVShowQuery();

  console.log(data);
  return <h1>TV shows</h1>;
}

export default App;

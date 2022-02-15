import { useGetDefaultTVShowQuery } from "./app/features/tv-shows";
import { TvShowSummary } from "./components/tv-show/summary";

function Home() {
  const { data: tvShow, isLoading, isError } = useGetDefaultTVShowQuery();

  if (isLoading && !tvShow) {
    return (
      <div>
        <span>loading ...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <span>there was occurred an error</span>
      </div>
    );
  }

  if (!tvShow) {
    return <></>;
  }

  return (
    <main>
      <TvShowSummary {...tvShow} />
    </main>
  );
}

export { Home };

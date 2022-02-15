import * as S from "./styles";

import { useGetDefaultTVShowQuery } from "~/app/features/tv-shows";
import { TvShowSummary } from "~/components/tv-show/summary";
import { TvShowEpisodesList } from "~/components/tv-show/episodes-list";

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
    <S.Container>
      <TvShowSummary tvShow={tvShow} />

      <S.EpisodeContainer>
        <TvShowEpisodesList showId={tvShow.id} />
      </S.EpisodeContainer>
    </S.Container>
  );
}

export { Home };

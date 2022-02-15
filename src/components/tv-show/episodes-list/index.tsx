import { TvShowEpisodeItem } from "../episode-item";

import * as S from "./styles";

import { useFetchTvShowEpisodesQuery } from "~/app/features/tv-shows";

type EpisodeListType = {
  showId: number;
};

export const TvShowEpisodesList = ({ showId }: EpisodeListType) => {
  const { data } = useFetchTvShowEpisodesQuery(showId);

  if (!data) {
    return <></>;
  }

  return (
    <S.Container>
      {data.map((episode) => (
        <TvShowEpisodeItem key={episode.id} episode={episode} />
      ))}
    </S.Container>
  );
};

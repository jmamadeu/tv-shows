import { useNavigate } from "react-router-dom";

import { TvShowEpisodeItem } from "../episode-item";

import * as S from "./styles";

import { useFetchTvShowEpisodesQuery } from "~/app/features/tv-shows";
import { useAppDispatch } from "~/app/hooks";
import { setCurrentEpisode } from "~/app/features/tv-shows/tv-shows-slice";
import { TvShowEpisodeType } from "~/app/features/tv-shows/types";

type EpisodeListType = {
  showId: number;
};

export const TvShowEpisodesList = ({ showId }: EpisodeListType) => {
  const { data } = useFetchTvShowEpisodesQuery(showId);

  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const handleClickItem = (episode: TvShowEpisodeType) => {
    dispatch(setCurrentEpisode(episode));
    navigate(`/episodes/${episode.id}/details`);
  };

  if (!data) {
    return <></>;
  }

  return (
    <S.Container>
      {data.map((episode) => (
        <TvShowEpisodeItem
          onClick={handleClickItem}
          key={episode.id}
          episode={episode}
        />
      ))}
    </S.Container>
  );
};

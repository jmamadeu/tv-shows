import { useNavigate } from "react-router-dom";

import * as S from "./styles";

import { TvShowEpisodeType } from "~/app/features/tv-shows/types";
import { setCurrentEpisode } from "~/app/features/tv-shows/tv-shows-slice";
import { useAppDispatch } from "~/app/hooks";

type TvShowEpisodeItemType = {
  episode: TvShowEpisodeType;
};

export const TvShowEpisodeItem = ({ episode }: TvShowEpisodeItemType) => {
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const handleClickItem = () => {
    dispatch(setCurrentEpisode(episode));
    navigate(`/episodes/${episode.id}/details`);
  };

  return (
    <S.Container>
      <img src={episode.coverImageURL} alt={`tv show ${episode.title}`} />

      <S.Content>
        <button title="episode title" onClick={handleClickItem}>
          {episode.title}
        </button>
        <p dangerouslySetInnerHTML={{ __html: episode.description ?? "" }} />
      </S.Content>
    </S.Container>
  );
};

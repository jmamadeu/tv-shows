import * as S from "./styles";

import { TvShowEpisodeType } from "~/app/features/tv-shows/types";

type TvShowEpisodeItemType = {
  episode: TvShowEpisodeType;
  onClick?: (episode: TvShowEpisodeType) => void;
};

export const TvShowEpisodeItem = ({
  episode,
  onClick,
}: TvShowEpisodeItemType) => (
  <S.Container>
    <img src={episode.coverImageURL} alt={`tv show ${episode.title}`} />

    <S.Content>
      <button title="episode title" onClick={() => onClick?.(episode)}>
        {episode.title}
      </button>
      <p dangerouslySetInnerHTML={{ __html: episode.description ?? "" }} />
    </S.Content>
  </S.Container>
);

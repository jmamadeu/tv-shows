import * as S from "./styles";

import { TvShowEpisodeType } from "~/app/features/tv-shows/types";

type TvShowEpisodeItemType = {
  episode: TvShowEpisodeType;
};

export const TvShowEpisodeItem = ({
  episode: { coverImageURL, title, description },
}: TvShowEpisodeItemType) => (
  <S.Container>
    <img src={coverImageURL} alt={`tv show ${title}`} />

    <S.Content>
      <strong>{title}</strong>
      <p dangerouslySetInnerHTML={{ __html: description ?? "" }} />
    </S.Content>
  </S.Container>
);

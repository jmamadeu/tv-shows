import * as S from "./styles";

import { TvShowType } from "~/app/features/tv-shows/types";

type TvShowSummaryType = {
  tvShow: Omit<TvShowType, "episodeList">;
};

export const TvShowSummary = ({
  tvShow: { coverImageURL, title, description },
}: TvShowSummaryType) => (
  <S.Container>
    <img src={coverImageURL} alt="tv show" />

    <S.Content>
      <strong>{title}</strong>
      <p dangerouslySetInnerHTML={{ __html: description ?? "" }} />
    </S.Content>
  </S.Container>
);

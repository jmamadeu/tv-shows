import * as S from "./styles";

import { TvShowType } from "~/app/features/tv-shows/types";

export const TvShowSummary = ({
  coverImageURL,
  title,
  description,
}: TvShowType) => (
  <S.Container>
    <img src={coverImageURL} alt="tv show" />

    <S.Content>
      <strong>{title}</strong>
      <p dangerouslySetInnerHTML={{ __html: description ?? "" }} />
    </S.Content>
  </S.Container>
);

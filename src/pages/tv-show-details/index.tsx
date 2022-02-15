import { Link } from "react-router-dom";

import * as S from "./styles";

import { useAppSelector } from "~/app/hooks";
import { TvShowSummary } from "~/components/tv-show/summary";

export const TvShowEpisodeDetails = () => {
  const { currentEpisode } = useAppSelector((state) => state.tvShowEpisode);

  return (
    <S.Container>
      <h1>Details</h1>
      <S.Content>
        <TvShowSummary tvShow={currentEpisode} />
      </S.Content>

      <S.GoBack>
        <Link to={"/"}>Go back</Link>
      </S.GoBack>
    </S.Container>
  );
};

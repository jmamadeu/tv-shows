import { TvShowAPIResponseType, TvShowType } from "./types";

export const DEFAULT_TV_SHOW = "Powerpuff Girls";

export const parseTVShow = (tvShow: TvShowAPIResponseType): TvShowType => {
  const tvShowParsed: TvShowType = {
    id: tvShow?.id,
    coverImageURL: tvShow?.image?.medium,
    description: tvShow?.summary,
    episodeList: [],
    title: tvShow?.name,
  };

  return tvShowParsed;
};

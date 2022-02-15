import { TVShowAPIResponseType, TVShowType } from "./types";

export const DEFAULT_TV_SHOW = "Powerpuff Girls";

export const parseTVShow = (tvShow: TVShowAPIResponseType): TVShowType => {
  const tvShowParsed: TVShowType = {
    id: tvShow?.id,
    coverImageURL: tvShow?.image?.medium,
    description: tvShow?.summary,
    episodeList: [],
    title: tvShow?.name,
  };

  return tvShowParsed;
};

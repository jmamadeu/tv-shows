import {
  TvShowAPIResponseEpisodeType,
  TvShowAPIResponseType,
  TvShowEpisodeType,
  TvShowType,
} from "./types";

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

export const parseTVShowEpisodes = (
  tvShowEpisodes: TvShowAPIResponseEpisodeType[]
): TvShowEpisodeType[] => {
  const tvShowEpisodesParsed: TvShowEpisodeType[] = tvShowEpisodes.map(
    (episode) => ({
      id: episode?.id,
      coverImageURL: episode?.image?.medium,
      description: episode?.summary,
      episodeList: [],
      title: episode?.name,
    })
  );

  return tvShowEpisodesParsed;
};

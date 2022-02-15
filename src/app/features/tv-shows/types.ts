export type TvShowBaseAPIResponse = {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  summary: string;
};

export type TvShowAPIResponseType = TvShowBaseAPIResponse;

export type TvShowAPIResponseEpisodeType = TvShowBaseAPIResponse;

export type TvShowEpisodeType = {
  id: number;
  title: string;
  description: string;
  coverImageURL: string;
};

export type TvShowType = TvShowEpisodeType & {
  episodeList: Array<TvShowEpisodeType>;
};

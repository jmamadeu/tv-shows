export type TvShowType = {
  id: number;
  title: string;
  description: string;
  coverImageURL: string;
  episodeList: Array<TvShowEpisodeType>;
};

export type TvShowAPIResponseType = {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  summary: string;
};

export type TvShowEpisodeType = {
  id: number;
  title: string;
  summary: string;
  coverImageURL: string;
};

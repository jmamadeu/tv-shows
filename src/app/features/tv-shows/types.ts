export type TVShowType = {
  id: number;
  title: string;
  description: string;
  coverImageURL: string;
  episodeList: Array<TVShowEpisodeType>;
};

export type TVShowAPIResponseType = {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  summary: string;
};

export type TVShowEpisodeType = {
  id: number;
  title: string;
  summary: string;
  coverImageURL: string;
};

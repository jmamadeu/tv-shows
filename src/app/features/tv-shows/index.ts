import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  TvShowAPIResponseEpisodeType,
  TvShowAPIResponseType,
  TvShowEpisodeType,
  TvShowType,
} from "./types";
import { DEFAULT_TV_SHOW, parseTVShow, parseTVShowEpisodes } from "./utils";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com",
  }),
  endpoints(builder) {
    return {
      getDefaultTVShow: builder.query<TvShowType, string | void>({
        query: (defaultTvShow = DEFAULT_TV_SHOW) =>
          `/singlesearch/shows?q=${defaultTvShow}`,
        transformResponse: async (tvShow: TvShowAPIResponseType) => {
          const tvShowParsed = parseTVShow(tvShow);

          return tvShowParsed;
        },
      }),
      fetchTvShowEpisodes: builder.query<TvShowEpisodeType[], number>({
        query: (id) => `/shows/${id}/episodes`,
        transformResponse: (episodes: TvShowAPIResponseEpisodeType[]) => {
          const episodesParsed = parseTVShowEpisodes(episodes);

          return episodesParsed;
        },
      }),
    };
  },
});

export const { useGetDefaultTVShowQuery, useFetchTvShowEpisodesQuery } =
  apiSlice;

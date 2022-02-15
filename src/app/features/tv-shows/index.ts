import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TVShowAPIResponseType, TVShowType } from "./types";
import { DEFAULT_TV_SHOW, parseTVShow } from "./utils";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com",
  }),
  endpoints(builder) {
    return {
      getDefaultTVShow: builder.query<TVShowType, string | void>({
        query: (defaultTvShow = DEFAULT_TV_SHOW) => `/singlesearch/shows?q=${defaultTvShow}`,
        transformResponse: async (tvShow: TVShowAPIResponseType) => {
          const tvShowParsed = parseTVShow(tvShow);

          return tvShowParsed;
        },
      }),
    };
  },
});

export const { useGetDefaultTVShowQuery } = apiSlice;

import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./features/tv-shows";
import tvShowEpisodeReducer from "./features/tv-shows/tv-shows-slice";

export const store = configureStore({
  reducer: {
    tvShowEpisode: tvShowEpisodeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // eslint-disable-next-line unicorn/prefer-spread
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

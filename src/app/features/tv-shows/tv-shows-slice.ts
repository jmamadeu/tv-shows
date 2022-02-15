import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TvShowEpisodeType } from "./types";

type TvShowEpisodeState = { currentEpisode: TvShowEpisodeType };

const initialState: TvShowEpisodeState = {
  currentEpisode: {} as TvShowEpisodeType,
};

const tvShowEpisodeSlice = createSlice({
  name: "tvShowEpisode",
  initialState,
  reducers: {
    setCurrentEpisode(state, action: PayloadAction<TvShowEpisodeType>) {
      state.currentEpisode = action.payload;
    },
  },
});

export const { setCurrentEpisode } = tvShowEpisodeSlice.actions;

export default tvShowEpisodeSlice.reducer;

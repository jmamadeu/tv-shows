import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "~/pages/home";
import { TvShowEpisodeDetails } from "~/pages/tv-show-details";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/episodes/:id/details"
          element={<TvShowEpisodeDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

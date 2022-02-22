import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "~/pages/home";
import { TvShowEpisodeDetails } from "~/pages/tv-show-details";

export const Router = () => {
  const routes = [
    {
      path: "/",
      element: Home,
      key: "home-page",
    },
    {
      path: "/episodes/:id/details",
      element: TvShowEpisodeDetails,
      key: "episodes-page",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ element: Element, key, ...rest }) => (
          <Route key={key} {...rest} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

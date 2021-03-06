import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { TvShowEpisodeItem } from ".";

describe("episode-item", () => {
  const episode = {
    id: 123,
    title: "string",
    description: "string",
    coverImageURL: "string",
  };

  test("should render the episode item", () => {
    render(<TvShowEpisodeItem episode={episode} />);

    expect(screen.getByRole("button")).toContainHTML("string");
  });
});

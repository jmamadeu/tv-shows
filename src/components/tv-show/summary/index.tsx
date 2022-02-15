import { TvShowType } from "../../../app/features/tv-shows/types";

export const TvShowSummary = ({
  coverImageURL,
  title,
  description,
}: TvShowType) => (
  <div>
    <img src={coverImageURL} alt="tv show" />

    <div>
      <span>{title}</span>
      <p dangerouslySetInnerHTML={{ __html: description ?? "" }} />
    </div>
  </div>
);

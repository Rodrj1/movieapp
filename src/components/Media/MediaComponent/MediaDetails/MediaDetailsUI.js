import { formatLanguage } from "../../../../functions/formatLanguage";
import Description from "./Description/Description";
import SeparatorDetails from "../../../Separator/SeparatorDetails";
import "./MediaDetailsUI.css";
import Loader from "../../../Loader/Loader";

const MediaDetailsUI = ({ media, genres, images, cast, reviews, similar }) => {
  const regexPrice = /\B(?=(\d{3})+(?!\d))/g;

  const CHAPTERS = media?.number_of_episodes;
  const DATE_LAST_AIRED = `Last aired in: ${media?.last_air_date}`;
  const SEASONS = media?.number_of_seasons;
  const BUDGET = media.budget?.toString().replace(regexPrice, ",");
  const DURATION = media?.runtime;
  const GENRES = genres;
  const HOMEPAGE = media?.homepage;
  const LANG_ORIGINAL = media?.original_language;
  const LANG_FORMATTED = formatLanguage(LANG_ORIGINAL);
  const OVERVIEW = media?.overview;
  const POSTER_URL = `https://image.tmdb.org/t/p/w500/${media.poster_path}`;
  const RATING = media?.vote_average ? media?.vote_average : "NOT RATED";
  const TITLE = media?.title ? media?.title : media?.original_name;
  const TITLE_ALT = media?.original_title;
  const REVENUE = media.revenue?.toString().replace(regexPrice, ",");

  const TRAILER = media?.videos?.results?.find(
    (video) => video.name === "Official Trailer"
  );
  const TV_TRAILER = media?.videos?.results?.find(
    (video) => video.official === true
  );

  const MOVIE_TRAILER_OR_TV_TRAILER = TRAILER ? TRAILER : TV_TRAILER;
  const RELEASE_OR_FIRST_EPISODE = media?.release_date
    ? `Release: ${media?.release_date}`
    : `Aired in: ${media?.first_air_date}`;
  const DURATION_OR_LAST_EPISODE = DURATION ? DURATION : DATE_LAST_AIRED;

  return (
    <>
      {media ? (
        <>
          {" "}
          <SeparatorDetails separatorClass="separator-to-bottom" />
          <div className="flex-details">
            <Description
              POSTER={POSTER_URL}
              TITLE_ALT={TITLE_ALT}
              TITLE={TITLE}
              GENRES={GENRES}
              RELEASE_OR_FIRST_EPISODE={RELEASE_OR_FIRST_EPISODE}
              DURATION_OR_LAST_EPISODE={DURATION_OR_LAST_EPISODE}
              RATING={RATING}
              OVERVIEW={OVERVIEW}
              TRAILER={MOVIE_TRAILER_OR_TV_TRAILER}
              HOMEPAGE={HOMEPAGE}
              type={media}
            />
          </div>
          <SeparatorDetails separatorClass="separator-to-top" />
          <div className="main-separator">
            <div className="flex-cast">
              <div className="flex-cast-item flex-column-container">
                <h1>Top Cast</h1>
                <div className="flex-cast-container">{cast}</div>
              </div>

              <div className="flex-cast-item flex-description-2">
                <div className="flex-desc-item-2">
                  <h3>Original Language</h3>
                  <p>{LANG_FORMATTED}</p>
                </div>
                <div className="flex-desc-item-2">
                  <h3>{BUDGET ? "Budget" : "Seasons"}</h3>
                  <p>{BUDGET ? `$${BUDGET}` : SEASONS}</p>
                </div>
                <div className="flex-desc-item-2">
                  <h3>{REVENUE ? "Revenue" : "Chapters"}</h3>
                  <p>{REVENUE ? `$${REVENUE}` : CHAPTERS}</p>
                </div>
              </div>
            </div>

            <div
              style={{ marginTop: "20px", width: "88%" }}
              className="filter-main-page"
            >
              <h1>
                {media?.title
                  ? "Similar movies you might like..."
                  : "Watch these similar TV shows!"}
              </h1>
              <div className="filter-main-page-container">{similar}</div>
            </div>

            <div className="flex-review-container">
              <div className="flex-column-container">{reviews}</div>
            </div>

            <div className="flex-backdrop-container">
              <div className="flex-column-container">
                <h1>View all backdrops</h1>
                <div className="flex-image-container">{images}</div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MediaDetailsUI;

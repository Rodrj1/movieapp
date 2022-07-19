import { formatLanguage } from "../../../../functions/formatLanguage";
import "./MovieOrTvDetailsUI.css";
import Description from "./Description/Description";
import SeparatorDetails from "../../../Separator/SeparatorDetails";

const TvShowDetailsUI = ({ tvShow, genres, cast, reviews, images }) => {
  const CHAPTERS = tvShow.number_of_episodes;
  const DESCRIPTION = tvShow.overview;
  const DATE_RELEASE = tvShow.first_air_date;
  const DATE_LAST_AIRED = tvShow.last_air_date;
  const GENRES = genres;
  const HOMEPAGE = tvShow.homepage;
  const LANG_ORIGINAL = tvShow.original_language;
  const LANG_FORMATTED = formatLanguage(LANG_ORIGINAL);
  const POSTER_URL = `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`;
  const RATING = tvShow.vote_average;
  const SEASONS = tvShow.number_of_seasons;
  const TITLE = tvShow.original_name;
  const TITLE_ALT = tvShow.original_name;
  const TRAILER = tvShow?.videos?.results?.find(
    (video) => video.official === true
  );

  console.log(tvShow);

  return (
    <>
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <div className="flex-details">
        <Description
          POSTER={POSTER_URL}
          TITLE_ALT={TITLE_ALT}
          TITLE={TITLE}
          GENRES={GENRES}
          RELEASE_OR_FIRST_EPISODE={`First aired: ${DATE_RELEASE}`}
          DURATION_OR_LAST_EPISODE={`Last aired: ${DATE_LAST_AIRED}`}
          RATING={RATING}
          DESCRIPTION={DESCRIPTION}
          TRAILER={TRAILER}
          HOMEPAGE={HOMEPAGE}
          type={tvShow}
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
              <a title="Visit Homepage" href={HOMEPAGE} target="_blank">
                <i className="fas fa-link fa-xl" />
              </a>
            </div>
            <div className="flex-desc-item-2">
              <h3>Original Language</h3>
              <p>{LANG_FORMATTED}</p>
            </div>
            <div className="flex-desc-item-2">
              <h3>Number of seasons</h3>
              <p>{SEASONS}</p>
            </div>
            <div className="flex-desc-item-2">
              <h3>Number of chapters</h3>
              <p>{CHAPTERS}</p>
            </div>
          </div>
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
  );
};

export default TvShowDetailsUI;

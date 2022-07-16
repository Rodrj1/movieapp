import { formatLanguage } from "../../../../functions/formatLanguage";
import "./MovieDetailsUI.css";
import Description from "./Description/Description";

const MovieDetailsUI = ({ movie, genres, images, cast, reviews }) => {
  const regexPrice = /\B(?=(\d{3})+(?!\d))/g;

  const BUDGET = movie.budget?.toString().replace(regexPrice, ",");
  const DESCRIPTION = movie.overview;
  const DURATION = movie.runtime;
  const GENRES = genres;
  const HOMEPAGE = movie.homepage;
  const LANG_ORIGINAL = movie.original_language;
  const LANG_FORMATTED = formatLanguage(LANG_ORIGINAL);
  const POSTER_URL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const RATING = movie.vote_average;
  const RELEASE_DATE = movie.release_date;
  const TITLE = movie.title;
  const TITLE_ALT = movie.original_title;
  const REVENUE = movie.revenue?.toString().replace(regexPrice, ",");

  const TRAILER = movie?.videos?.results?.find(
    (video) => video.name === "Official Trailer"
  );

  return (
    <>
      <br />
      <div className="flex-details">
        <Description
          POSTER={POSTER_URL}
          TITLE_ALT={TITLE_ALT}
          TITLE={TITLE}
          GENRES={GENRES}
          RELEASE_DATE={RELEASE_DATE}
          DURATION={DURATION}
          RATING={RATING}
          DESCRIPTION={DESCRIPTION}
          TRAILER={TRAILER}
          movie={movie}
        />
      </div>
      <br />
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
              <h3>Budget</h3>
              <p>${BUDGET}</p>
            </div>
            <div className="flex-desc-item-2">
              <h3>Revenue</h3>
              <p>${REVENUE}</p>
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

export default MovieDetailsUI;

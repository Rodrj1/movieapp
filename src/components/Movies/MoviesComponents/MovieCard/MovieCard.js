import "./MovieCard.css";
import placeholder from "../../../../placeholder.png";
import FunctionalButton from "../../../buttons/FunctionalButton";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onRemove }) => {
  const TITLE = movie.title;
  const ALT_TITLE = movie.original_title;
  const POSTER_URL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const RATING = movie.vote_average;
  const MOVIE_UUID = movie.uuid;
  const TV_SHOW_TITLE = movie.original_name;
  const MEDIA_TYPE = movie.media_type;
  const LINK_ID = movie.id;

  return (
    <div className="card">
      <Link to={movie?.original_title ? `/movie/${LINK_ID}` : `/tv/${LINK_ID}`}>
        {movie.poster_path != null ? (
          <img src={POSTER_URL} alt={ALT_TITLE} />
        ) : (
          <img src={placeholder} alt={ALT_TITLE} />
        )}
      </Link>
      <h1>{TITLE ? TITLE : TV_SHOW_TITLE}</h1>
      <h1>
        <i className="fa-solid fa-star"></i>
        {RATING}
      </h1>
      {MOVIE_UUID ? (
        <FunctionalButton
          fn={onRemove}
          id={MOVIE_UUID}
          text="DELETE MOVIE"
          btnClass="list-button"
        />
      ) : null}
    </div>
  );
};

export default MovieCard;

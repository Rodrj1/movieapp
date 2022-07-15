import MovieCard from "./MoviesComponents/MovieCard/MovieCard";
import getGenres from "../../data/getGenres";
import FunctionalButton from "../buttons/FunctionalButton";
import "./MoviesContainerUI.css";
import { v4 as uuid } from "uuid";

const MoviesContainerUI = ({
  movies,
  handleOnSubmit,
  handleOnChange,
  handleOnClick,
}) => {
  const GENRE_FILTERS = getGenres.map((genre) => (
    <FunctionalButton
      key={genre.name}
      id={genre.id}
      fn={handleOnClick}
      btnClass="genre-button"
      text={genre.name}
    />
  ));
  const MOVIE_CARDS = movies?.map((movie) => (
    <MovieCard key={uuid()} movie={movie} />
  ));

  return (
    <div className="movie-column-container">
      <form onSubmit={handleOnSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search Movie..."
          onChange={handleOnChange}
        />
      </form>
      <div className="genres-container">{GENRE_FILTERS}</div>
      <div className="movies-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default MoviesContainerUI;
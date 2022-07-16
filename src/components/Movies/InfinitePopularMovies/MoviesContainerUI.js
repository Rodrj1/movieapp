import MovieCard from "../MoviesComponents/MovieCard/MovieCard";
import genreData from "../../../data/genreData";
import FunctionalButton from "../../buttons/FunctionalButton";
import "./MoviesContainerUI.css";
import { v4 as uuid } from "uuid";

const MoviesContainerUI = ({
  movies,
  handleOnSubmit,
  handleOnChange,
  handleOnClick,
}) => {
  const GENRE_FILTERS = genreData.map((genre) => (
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
      <br />
      <form onSubmit={handleOnSubmit} className="search-movie-container">
        <h1>WELCOME TO MOVIESRC.</h1>
        <h3>Look out for trending movies and TV shows.</h3>
        <input
          className="search"
          type="search"
          placeholder="Search for a movie or TV show..."
          onChange={handleOnChange}
        />
      </form>
      <br />
      <div className="genres-container">{GENRE_FILTERS}</div>
      <br />
      <div className="movies-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default MoviesContainerUI;
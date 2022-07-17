import MovieCard from "../MoviesComponents/MovieCard/MovieCard";
import genreData from "../../../data/genreData";
import FunctionalButton from "../../buttons/FunctionalButton";
import "./MoviesContainerUI.css";
import { v4 as uuid } from "uuid";
import SeparatorDetails from "../../Separator/SeparatorDetails";

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
      <SeparatorDetails separatorClass="separator-to-header" />
      <form onSubmit={handleOnSubmit} className="search-movie-container">
        <h1 className="search-item">WELCOME TO MOVIESRC.</h1>
        <input
          className="search search-item"
          type="search"
          placeholder="Search for a movie or TV show..."
          onChange={handleOnChange}
        />
      </form>
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <div className="genres-container">{GENRE_FILTERS}</div>
      <br />
      <div className="movies-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default MoviesContainerUI;

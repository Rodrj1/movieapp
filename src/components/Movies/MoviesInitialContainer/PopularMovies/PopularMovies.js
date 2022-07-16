import MovieCard from "../../MoviesComponents/MovieCard/MovieCard";

const PopularMovies = ({ popularMovies }) => {
  const MOVIE_CARDS = popularMovies?.map((movie) => (
    <MovieCard key={movie.original_title} movie={movie} />
  ));
  return (
    <div className="filter-main-page">
      <p>Popular Movies</p>
      <div className="filter-main-page-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default PopularMovies;

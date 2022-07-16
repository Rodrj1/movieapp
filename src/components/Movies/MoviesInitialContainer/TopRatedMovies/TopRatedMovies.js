import MovieCard from "../../MoviesComponents/MovieCard/MovieCard";

const TopRatedMovies = ({ topRatedMovies }) => {
  const MOVIE_CARDS = topRatedMovies?.map((movie) => (
    <MovieCard key={movie.original_title} movie={movie} />
  ));
  return (
    <div className="filter-main-page">
      <p>Top Rated Movies</p>
      <div className="filter-main-page-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default TopRatedMovies;

import MovieCard from "../../MoviesComponents/MovieCard/MovieCard";

const UpcomingMovies = ({ upcomingMovies }) => {
  const MOVIE_CARDS = upcomingMovies?.map((movie) => (
    <MovieCard key={movie.original_title} movie={movie} />
  ));
  return (
    <div className="filter-main-page">
      <p>Upcoming Movies</p>
      <div className="filter-main-page-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default UpcomingMovies;

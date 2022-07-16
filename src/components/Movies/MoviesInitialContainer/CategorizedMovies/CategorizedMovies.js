import MovieCard from "../../MoviesComponents/MovieCard/MovieCard";
import { v4 as uuid } from "uuid";

const CategorizedMovies = ({ movies, name }) => {
  const MOVIE_CARDS = movies?.map((movie) => (
    <MovieCard key={uuid()} movie={movie} />
  ));
  return (
    <div className="filter-main-page">
      <p>{name}</p>
      <div className="filter-main-page-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default CategorizedMovies;
import MovieCard from "../../MoviesComponents/MovieCard/MovieCard";

const WeeklyTrends = ({ weeklyTrends }) => {
  const MOVIE_CARDS = weeklyTrends?.map((trend) => (
    <MovieCard key={trend.original_title} movie={trend} />
  ));
  return (
    <div className="filter-main-page">
      <p>Weekly Trends</p>
      <div className="filter-main-page-container">{MOVIE_CARDS}</div>
    </div>
  );
};

export default WeeklyTrends;

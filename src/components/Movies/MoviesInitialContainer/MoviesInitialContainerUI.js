import "./MoviesInitialContainerUI.css";
import CategorizedMovies from "./CategorizedMovies/CategorizedMovies";

const MoviesInitialContainerUI = ({
  weeklyTrends,
  popularMovies,
  upcomingMovies,
  topRatedMovies,
}) => {
  return (
    <>
      <br />
      <CategorizedMovies movies={weeklyTrends} name="Weekly Trends" />
      <br />
      <CategorizedMovies movies={popularMovies} name="Popular Movies" />
      <br />
      <CategorizedMovies movies={upcomingMovies} name="Upcoming Movies" />
      <br />
      <CategorizedMovies movies={topRatedMovies} name="Top Rated Movies" />
    </>
  );
};

export default MoviesInitialContainerUI;

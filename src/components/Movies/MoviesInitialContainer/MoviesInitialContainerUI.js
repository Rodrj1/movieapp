import "./MoviesInitialContainerUI.css";
import PopularMovies from "./PopularMovies/PopularMovies";
import UpcomingMovies from "./UpcomingMovies/UpcomingMovies";
import TopRatedMovies from "./TopRatedMovies/TopRatedMovies";
import WeeklyTrends from "./WeeklyTrends/WeeklyTrends";

const MoviesInitialContainerUI = ({
  weeklyTrends,
  popularMovies,
  upcomingMovies,
  topRatedMovies,
}) => {
  return (
    <>
      <br />
      <WeeklyTrends weeklyTrends={weeklyTrends} />
      <br />
      <PopularMovies popularMovies={popularMovies} />
      <br />
      <UpcomingMovies upcomingMovies={upcomingMovies} />
      <br />
      <TopRatedMovies topRatedMovies={topRatedMovies} />
    </>
  );
};

export default MoviesInitialContainerUI;

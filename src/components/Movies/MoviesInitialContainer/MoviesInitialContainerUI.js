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
      <CategorizedMovies
        movies={weeklyTrends}
        name="Weekly Trends"
        media="Movies"
        category="weekly"
      />
      <br />
      <CategorizedMovies
        movies={popularMovies}
        name="Popular Movies"
        media="Movies"
        category="popular"
      />
      <br />
      <CategorizedMovies
        movies={upcomingMovies}
        name="Upcoming Movies"
        media="Movies"
        category="upcoming"
      />
      <br />
      <CategorizedMovies
        movies={topRatedMovies}
        name="Top Rated Movies"
        media="Movies"
        category="toprated"
      />
    </>
  );
};

export default MoviesInitialContainerUI;

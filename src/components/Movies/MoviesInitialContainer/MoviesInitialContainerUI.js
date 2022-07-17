import "./MoviesInitialContainerUI.css";
import CategorizedMovies from "./CategorizedMovies/CategorizedMovies";
import SeparatorDetails from "../../Separator/SeparatorDetails";
import FrontContent from "./FrontContent/FrontContent";

const MoviesInitialContainerUI = ({
  weeklyTrends,
  popularMovies,
  upcomingMovies,
  topRatedMovies,
}) => {
  return (
    <>
      <SeparatorDetails separatorClass="separator-to-header" />
      <FrontContent />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMovies
        movies={weeklyTrends}
        name="Popular This Week"
        media="Movies"
        category="weekly"
        cl="weekly"
        cl2="weekly-container"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMovies
        movies={popularMovies}
        name="Popular Movies"
        media="Movies"
        category="popular"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMovies
        movies={upcomingMovies}
        name="Upcoming Movies"
        media="Movies"
        category="upcoming"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMovies
        movies={topRatedMovies}
        name="Top Rated Movies"
        media="Movies"
        category="toprated"
        cl="toprated"
        cl2="toprated-container"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
    </>
  );
};

export default MoviesInitialContainerUI;

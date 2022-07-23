import "./MediaInitialContainerUI.css";
import CategorizedMedia from "./CategorizedMedia/CategorizedMedia";
import SeparatorDetails from "../../Separator/SeparatorDetails";
import FrontContent from "./FrontContent/FrontContent";
import LatestShow from "./LatestShow/LatestShow";

const MoviesInitialContainerUI = ({
  weeklyTrends,
  popularMovies,
  upcomingMovies,
  topRatedMovies,
  airingToday
}) => {

  return (
    <>
      <SeparatorDetails separatorClass="separator-to-header" />
      <FrontContent />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMedia
        movies={weeklyTrends}
        name="Popular This Week"
        media="Movies"
        category="weekly"
        cl="weekly"
        cl2="weekly-container"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <LatestShow shows={airingToday} />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMedia
        movies={popularMovies}
        name="Popular Movies"
        media="Movies"
        category="popular"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMedia
        movies={upcomingMovies}
        name="Upcoming Movies"
        media="Movies"
        category="upcoming"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategorizedMedia
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

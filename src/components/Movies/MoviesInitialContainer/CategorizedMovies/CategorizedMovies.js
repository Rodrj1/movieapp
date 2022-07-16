import MovieCard from "../../MoviesComponents/MovieCard/MovieCard";
import { v4 as uuid } from "uuid";
import { useSwitchTvMovie } from "../../../../hooks/useSwitchTvMovie";
import { useEffect, useState } from "react";

const CategorizedMovies = ({ movies, name, category, media }) => {
  const { changeMediaData, changeCategoryName, refreshedData } =
    useSwitchTvMovie();

  const [currentData, setCurrentData] = useState(movies);
  const [currentMedia, setCurrentMedia] = useState(media);
  const [currentCategoryName, setCurrentCategoryName] = useState(name);
  const [newDataLoaded, setNewDataLoaded] = useState(false);

  const INITIAL_MOVIE_CARDS = movies?.map((movie) => (
    <MovieCard key={uuid()} movie={movie} />
  ));

  const handleMediaData = () => {
    if (name != "Weekly Trends") {
      changeMediaData(category, currentMedia);
      const switchMedia = currentMedia == "Movies" ? "TV-Shows" : "Movies";
      setCurrentMedia(switchMedia);
      changeCategoryName(currentCategoryName, setCurrentCategoryName);
      if (newDataLoaded == false) {
        setNewDataLoaded((notLoaded) => !notLoaded);
      }
    }
  };

  useEffect(() => {
    setCurrentData(refreshedData);
  }, [refreshedData]);

  if (currentData == []) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="filter-main-page">
      <p>{currentCategoryName}</p>
      {name != "Weekly Trends" ? (
        <button className="category-button" onClick={handleMediaData}>
          Look for {currentMedia == "Movies" ? "TV-Shows" : "Movies"}
        </button>
      ) : null}
      <div className="filter-main-page-container">
        {!newDataLoaded
          ? INITIAL_MOVIE_CARDS
          : currentData.map((data) => <MovieCard key={uuid()} movie={data} />)}
      </div>
    </div>
  );
};

export default CategorizedMovies;

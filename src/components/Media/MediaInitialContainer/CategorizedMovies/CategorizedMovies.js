import MediaCard from "../../MediaComponent/MediaCard/MediaCard";
import { v4 as uuid } from "uuid";
import { useSwitchTvMovie } from "../../../../hooks/useSwitchTvMovie";
import { useEffect, useState } from "react";

const CategorizedMovies = ({ movies, name, category, media, cl, cl2 }) => {
  const { changeMediaData, changeCategoryName, refreshedData } =
    useSwitchTvMovie();

  const [currentData, setCurrentData] = useState(movies);
  const [currentMedia, setCurrentMedia] = useState(media);
  const [currentCategoryName, setCurrentCategoryName] = useState(name);
  const [newDataLoaded, setNewDataLoaded] = useState(false);

  const INITIAL_MOVIE_CARDS = movies?.map((movie) => (
    <MediaCard key={uuid()} media={movie} />
  ));

  const handleMediaData = () => {
    if (name != "Popular This Week") {
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
    <div className="filter-body">
      <div className={`filter-main-page ${cl2}`}>
        <p>{currentCategoryName}</p>
        {name != "Popular This Week" ? (
          <button className="category-button" onClick={handleMediaData}>
            Look for {currentMedia == "Movies" ? "TV-Shows" : "Movies"}
          </button>
        ) : null}
        <div className={`filter-main-page-container ${cl}`}>
          {!newDataLoaded
            ? INITIAL_MOVIE_CARDS
            : currentData.map((data) => (
                <MediaCard key={uuid()} media={data} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CategorizedMovies;

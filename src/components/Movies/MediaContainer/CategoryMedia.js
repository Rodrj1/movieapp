import MovieCard from "../MoviesComponents/MovieCard/MovieCard";
import { v4 as uuid } from "uuid";

const CategoryMedia = ({ mediaData, name, description, media, cl, cl2 }) => {
  const MOVIE_CARDS = mediaData?.map((movie) => (
    <MovieCard key={uuid()} movie={movie} />
  ));

  if (mediaData == []) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="category-body">
      <div className={`category-main-page ${cl2}`}>
        <div>
          <h1>{name}</h1>
        </div>
        <div className={`category-main-page-container ${cl}`}>
          {MOVIE_CARDS}
        </div>
      </div>
    </div>
  );
};

export default CategoryMedia;

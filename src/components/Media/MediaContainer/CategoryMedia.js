import MediaCard from "../MediaComponent/MediaCard/MediaCard";
import { v4 as uuid } from "uuid";

const CategoryMedia = ({ mediaData, name, description, media, cl, cl2 }) => {
  const MOVIE_CARDS = mediaData?.map((movie) => (
    <MediaCard key={uuid()} media={movie} />
  ));

  if (mediaData == []) {
    return <h1>Loading</h1>;
  }

  const SCI_ICON =
    name == "Break the line between fantasy and reality" ? (
      <i className="fa-solid fa-user-astronaut"></i>
    ) : null;

  return (
    <div className="category-body">
      <div className={`category-main-page ${cl2}`}>
        <div>
          <h1>{name} {SCI_ICON}</h1>
        </div>
        <div className={`category-main-page-container ${cl}`}>
          {MOVIE_CARDS}
        </div>
      </div>
    </div>
  );
};

export default CategoryMedia;

import placeholder from "../../../../placeholder.png";
import FunctionalButton from "../../../buttons/FunctionalButton";
import { Link } from "react-router-dom";
import "./MediaCard.css";

const MediaCard = ({ media, onRemove }) => {
  const TITLE = media.title;
  const ALT_TITLE = media.original_title;
  const POSTER_URL = `https://image.tmdb.org/t/p/w500/${media.poster_path}`;
  const TV_SHOW_TITLE = media.original_name;
  const LINK_ID = media.id;

  // Only if it is a MediaCard in a user list.
  const MOVIE_UUID = media.uuid;
  //

  return (
    <>
      {media ? (
        <div className="card">
          <Link           
            to={media?.original_title ? `/movie/${LINK_ID}` : `/tv/${LINK_ID}`}
          >
            {media.poster_path != null ? (
              <img src={POSTER_URL} alt={ALT_TITLE} />
            ) : (
              <img src={placeholder} alt={ALT_TITLE} />
            )}
          </Link>
          <h1>{TITLE ? TITLE : TV_SHOW_TITLE}</h1>
          {MOVIE_UUID ? (
            <FunctionalButton
              fn={onRemove}
              id={MOVIE_UUID}
              text="DELETE media"
              btnClass="list-button"
            />
          ) : null}
        </div>
      ) : (
        <span class="loader"></span>
      )}
    </>
  );
};

export default MediaCard;

import PosterImage from "./PosterImage";
import YoutubeTrailer from "./YoutubeTrailer";
import UserLists from "./UserLists";

const Description = ({
  type,
  POSTER,
  TITLE_ALT,
  TITLE,
  GENRES,
  RELEASE_OR_FIRST_EPISODE,
  DURATION_OR_LAST_EPISODE,
  RATING,
  DESCRIPTION,
  TRAILER,
}) => {
  return (
    <>
      <PosterImage POSTER={POSTER} TITLE_ALT={TITLE_ALT} />

      <div className="flex-details-item flex-description">
        <YoutubeTrailer trailer={TRAILER} />

        <UserLists type={type} />

        <h1>{TITLE}</h1>
        <p>{GENRES}</p>
        {type?.original_title ? (
          <h3>{`${RELEASE_OR_FIRST_EPISODE} - ${DURATION_OR_LAST_EPISODE} minutes.`}</h3>
        ) : (
          <h3>{`${RELEASE_OR_FIRST_EPISODE} - ${DURATION_OR_LAST_EPISODE}.`}</h3>
        )}
        <h3>
          <i className="fa-solid fa-star" />
          {` ${RATING}`}
        </h3>
        <h3>Overview</h3>
        <p>{DESCRIPTION}</p>
      </div>
    </>
  );
};

export default Description;

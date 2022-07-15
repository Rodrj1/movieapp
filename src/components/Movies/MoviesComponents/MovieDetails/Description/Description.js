import PosterImage from "./PosterImage";
import UserLists from "./UserLists";
import YoutubeTrailer from "./YoutubeTrailer";

const Description = ({
  POSTER,
  TITLE_ALT,
  TITLE,
  GENRES,
  RELEASE_DATE,
  DURATION,
  RATING,
  DESCRIPTION,
  TRAILER,
  movie,
}) => {
  return (
    <>
      <PosterImage POSTER={POSTER} TITLE_ALT={TITLE_ALT} />

      <div className="flex-details-item flex-description">
        <YoutubeTrailer trailer={TRAILER} />

        <UserLists movie={movie} />

        <h1>{TITLE}</h1>
        <p>{GENRES}</p>
        <h3>{`${RELEASE_DATE} - ${DURATION} minutes.`}</h3>
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

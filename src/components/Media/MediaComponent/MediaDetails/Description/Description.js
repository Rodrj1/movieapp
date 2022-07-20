import PosterImage from "./PosterImage";
import YoutubeTrailer from "./YoutubeTrailer";
import UserLists from "./UserLists";
import Loader from "../../../../Loader/Loader";

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
  HOMEPAGE,
}) => {
  return (
    <>
      <PosterImage POSTER={POSTER} TITLE_ALT={TITLE_ALT} />

      <div className="flex-details-item flex-description">
        <a title="Visit Homepage" href={HOMEPAGE} target="_blank">
          VISIT OFFICIAL WEBSITE <i className="fas fa-link" />
        </a>

        {TITLE ? <YoutubeTrailer trailer={TRAILER} /> : <Loader />}

        {type ? <UserLists type={type} /> : <Loader />}

        <h1>{TITLE ? TITLE : <Loader />}</h1>
        <p>{GENRES ? GENRES : <Loader />}</p>
        {type?.original_title ? (
          <h3>
            {RELEASE_OR_FIRST_EPISODE && DURATION_OR_LAST_EPISODE ? (
              `${RELEASE_OR_FIRST_EPISODE} - ${DURATION_OR_LAST_EPISODE} minutes.`
            ) : (
              <Loader />
            )}
          </h3>
        ) : (
          <h3>
            {RELEASE_OR_FIRST_EPISODE && DURATION_OR_LAST_EPISODE ? (
              `${RELEASE_OR_FIRST_EPISODE} - ${DURATION_OR_LAST_EPISODE}.`
            ) : (
              <Loader />
            )}
          </h3>
        )}
        <h3>
          <i className="fa-solid fa-star" />
          {RATING ? ` ${RATING}` : <Loader />}
        </h3>
        <h3>Overview</h3>
        <p>{DESCRIPTION ? DESCRIPTION : <Loader />}</p>
      </div>
    </>
  );
};

export default Description;

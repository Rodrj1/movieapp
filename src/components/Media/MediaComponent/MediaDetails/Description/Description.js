import PosterImage from "./PosterImage";
import YoutubeTrailer from "./YoutubeTrailer";
import UserLists from "./UserLists";
import Loader from "../../../../Loader/Loader";
import { useState } from "react";

const Description = ({
  type,
  POSTER,
  TITLE_ALT,
  TITLE,
  GENRES,
  RELEASE_OR_FIRST_EPISODE,
  DURATION_OR_LAST_EPISODE,
  RATING,
  OVERVIEW,
  TRAILER,
  HOMEPAGE,
}) => {
  const [playTrailer, setPlayTrailer] = useState(false);

  return (
    <>
      <PosterImage POSTER={POSTER} TITLE_ALT={TITLE_ALT} />

      <div className="flex-details-item flex-description">
        <a title="Visit Homepage" href={HOMEPAGE} target="_blank">
          VISIT OFFICIAL WEBSITE <i className="fas fa-link" />
        </a>

        <YoutubeTrailer
          trailer={TRAILER}
          playTrailer={playTrailer}
          setPlayTrailer={setPlayTrailer}
        />

        <UserLists type={type} playTrailer={playTrailer} />

        <h1>{TITLE}</h1>
        <p>{GENRES}</p>
        {type?.original_title ? (
          <h3>
            {RELEASE_OR_FIRST_EPISODE} - {DURATION_OR_LAST_EPISODE} minutes.
          </h3>
        ) : (
          <h3>
            {RELEASE_OR_FIRST_EPISODE} - {DURATION_OR_LAST_EPISODE}.
          </h3>
        )}
        <h3>
          <i className="fa-solid fa-star" />
          {RATING}
        </h3>
        <h3>Overview</h3>
        <p>{OVERVIEW ? OVERVIEW : "It does not have a description yet."}</p>
      </div>
    </>
  );
};

export default Description;

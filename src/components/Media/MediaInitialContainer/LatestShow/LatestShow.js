import { useState } from "react";
import { Link } from "react-router-dom";

const LatestShow = ({ shows }) => {
  const [index, setIndex] = useState(0);

  const SHOW_NAME = shows[index]?.name;
  const SHOW_DESCRIPTION = shows[index]?.overview;
  const SHOW_POSTER = `https://image.tmdb.org/t/p/w500/${shows[index]?.poster_path}`;
  const SHOW_AIR_DATE = shows[index]?.first_air_date;
  const SHOW_LINK_ID = shows[index]?.id;

  const h1Style = {
    textAlign: "center",
    color: "white",
    marginBottom: "50px",
  };

  const handleIncIndex = () => {
    setIndex((index) => index + 1);
  };

  const handleDecIndex = () => {
    setIndex((index) => index - 1);
  };

  return (
    <div className="filter-body">
      <h1 style={h1Style}>Airing Today</h1>
      <div className="grid-latest-main">
        <div className="grid-latest">
          <h1>{SHOW_NAME}</h1>
          <h2>AVAILABLE {SHOW_AIR_DATE}</h2>
          <p>{SHOW_DESCRIPTION}</p>
        </div>
        <div className={`grid-latest latest-main-page-container`}>
          <Link
            to={`/tv/${SHOW_LINK_ID}`}
          >
            <img src={SHOW_POSTER} />
          </Link>
        </div>
      </div>
      <div className="grid-latest">
        {index > 0 ? (
          <i
            onClick={handleDecIndex}
            className="fa-solid fa-chevron-left fa-xl"
          />
        ) : null}
        {index < shows.length - 1 ? (
          <i
            onClick={handleIncIndex}
            className="fa-solid fa-chevron-right fa-xl"
          />
        ) : null}
      </div>
    </div>
  );
};

export default LatestShow;

import { Link } from "react-router-dom";

const FrontContent = () => {
  return (
    <div className="front-content">
      <h1 className="front-item">
        GET STARTED AND LOOK FOR <br />
        TRENDING MOVIES AND TV SHOWS.
        <br />
      </h1>
      <h2 className="front-item">
        <span className="front-span">
          <Link to="/allmovies" className="front-link">
            OR SEARCH
          </Link>
        </span>{" "}
        for them manually.
      </h2>

      <i className="front-item fa-solid fa-arrow-down fa-fade fa-2xl"></i>
    </div>
  );
};

export default FrontContent;

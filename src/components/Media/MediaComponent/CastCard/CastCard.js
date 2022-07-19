import "./CastCard.css";

const CastCard = ({ cast }) => {
  const NAME = cast.name;
  const DEPARTMENT = cast.known_for_department;
  const CHARACTER = cast.character;
  const IMAGE = cast.profile_path;

  return (
    <div className="cast-card">
      {IMAGE != null ? (
        <img src={`https://image.tmdb.org/t/p/original${IMAGE}`} />
      ) : (
        <i className="fa-solid fa-circle-question"></i>
      )}
      <h1>{NAME}</h1>
      <p>Played: {CHARACTER}</p>
      <p>{DEPARTMENT}</p>
    </div>
  );
};

export default CastCard;

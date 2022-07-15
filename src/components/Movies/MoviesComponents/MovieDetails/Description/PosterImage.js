import PLACEHOLDER from "../../../../../placeholder.png";

const PosterImage = ({POSTER, TITLE_ALT}) => {
  return (
    <div className="flex-details-item">
      {POSTER ? (
        <img src={POSTER} alt={TITLE_ALT} />
      ) : (
        <img src={PLACEHOLDER} alt={TITLE_ALT} />
      )}
    </div>
  );
};

export default PosterImage;

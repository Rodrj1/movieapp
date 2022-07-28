import "./Backdrop.css";

const ORIGINAL_IMG_URL = `https://image.tmdb.org/t/p/original`;

const Backdrop = ({ backdrop }) => {
  const IMAGE = backdrop?.file_path;
  return (
    <a
      title="See backdrop in full resolution."
      href={`${ORIGINAL_IMG_URL}${backdrop.file_path}`}
      target="_blank"
      key={backdrop.file_path}
    >
      {IMAGE != null ? (
        <img
          src={`${ORIGINAL_IMG_URL}${backdrop.file_path}`}
          alt={backdrop?.file_path}
        />
      ) : (
        <i className="fa-solid fa-circle-question"></i>
      )}
    </a>
  );
};

export default Backdrop;

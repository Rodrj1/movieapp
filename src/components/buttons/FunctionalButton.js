import "./FunctionalButton.css";

const FunctionalButton = ({ id, fn, btnClass, text }) => {
  return (
      <button onClick={() => fn(id)} className={btnClass}>
        {text}
      </button>
  );
};

export default FunctionalButton;

/*
<button onClick={() => handleRemoveList(uuid)}>DELETE LIST</button>

<button onClick={() => onRemove(MOVIE_UUID)}>DELETE MOVIE</button>

<button onClick={updateTrailerState} className="btn-trailer-on">
  <i className="fa-solid fa-circle-pause fa-2xl" /> CLOSE
</button>

<button onClick={updateTrailerState} className="btn-trailer-off">
  <i className="fa-solid fa-circle-play fa-2xl" /> Play Trailer
</button>

*/

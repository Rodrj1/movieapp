import { useState } from "react";
import YouTube from "react-youtube";

const YoutubeTrailer = ({ trailer }) => {
  const [playTrailer, setPlayTrailer] = useState(false);

  const updateTrailerState = () => {
    setPlayTrailer((play) => !play);
  };

  return (
    <>
      {trailer && playTrailer ? (
        <>
          <YouTube
            videoId={trailer.key}
            opts={{ width: "100%", height: "100%" }}
            className="youtube-trailer"
          />
          <button onClick={updateTrailerState} className="btn-trailer-on">
            <i className="fa-solid fa-circle-pause fa-2xl" /> CLOSE
          </button>
        </>
      ) : (
        <button onClick={updateTrailerState} className="btn-trailer-off">
          <i className="fa-solid fa-circle-play fa-2xl" /> Play Trailer
        </button>
      )}
    </>
  );
};

export default YoutubeTrailer;

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import MediaDetailsUI from "./MediaDetailsUI";
import CastCard from "../CastCard/CastCard";
import ReviewUI from "./Review/ReviewUI";
import Loader from "../../../Loader/Loader";
import MediaCard from "../MediaCard/MediaCard";

const MediaDetails = ({ media, setUpdateMovieMedia, setUpdateTvMedia }) => {
  const { movieId, tvShowId } = useParams();
  const [mediaDetails, setMediaDetails] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const LINK_ID = media == "movie" ? movieId : tvShowId;

  // API calls.
  // ------------------------------------------------------------------------

  const MEDIA_URL = `
  https://api.themoviedb.org/3/${media}/${LINK_ID}?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&include_image_language&append_to_response=videos,images,credits,reviews,similar&include_image_language=en,null`;

  const MEDIA_SIMILAR_URL = `https://api.themoviedb.org/3/${media}/${LINK_ID}/similar?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`;

  const ORIGINAL_IMG_URL = `https://image.tmdb.org/t/p/original`;

  // ------------------------------------------------------------------------

  useEffect(() => {
    window.scrollTo(0, 0);
    if (loaded == true) {
      if (media == "movie") {
        setUpdateMovieMedia((update) => !update);
      } else {
        setUpdateTvMedia((update) => !update);
      }
    }
    if (loaded == false) {
      setLoaded(true);
    }
  }, [movieId, tvShowId]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const getMovie = await axios.get(MEDIA_URL);
        const getSimilar = await axios.get(MEDIA_SIMILAR_URL);
        setMediaDetails(getMovie.data);
        setSimilar(getSimilar.data);
      } catch (e) {
        console.log(e, "Error fetching data in MovieDetails component.");
      }
    };
    fetchMovieData();
  }, []);

  const MEDIA_GENRES = mediaDetails?.genres?.map((genre, index) => {
    if (mediaDetails?.genres?.length != index + 1) {
      return `${genre.name}, `;
    } else {
      return `${genre.name}.`;
    }
  });

  const MEDIA_CAST = mediaDetails?.credits?.cast?.map((cast) => (
    <CastCard key={cast.id} cast={cast} />
  ));

  const MEDIA_REVIEWS = mediaDetails?.reviews?.results?.map((review) => (
    <ReviewUI key={review.id} review={review} />
  ));

  const MEDIA_IMAGES = mediaDetails?.images?.backdrops?.map((image) => {
    return (
      <a
        title="See backdrop in full resolution."
        href={`${ORIGINAL_IMG_URL}${image.file_path}`}
        target="_blank"
        key={image.file_path}
      >
        <img src={`${ORIGINAL_IMG_URL}${image.file_path}`} alt="none" />
      </a>
    );
  });

  const MEDIA_SIMILAR = similar?.results?.map((similar) => (
    <MediaCard media={similar} key={uuid()} />
  ));

  if (mediaDetails == []) {
    return <Loader />;
  }

  return (
    <MediaDetailsUI
      media={mediaDetails}
      genres={MEDIA_GENRES}
      cast={MEDIA_CAST}
      reviews={MEDIA_REVIEWS}
      images={MEDIA_IMAGES}
      similar={MEDIA_SIMILAR}
    />
  );
};

export default MediaDetails;

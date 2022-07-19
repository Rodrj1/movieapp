import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetailsUI from "./MovieDetailsUI";
import CastCard from "../CastCard/CastCard";
import ReviewUI from "./Review/ReviewUI";
import Loader from "../../../Loader/Loader";
import MediaCard from "../MediaCard/MediaCard";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [similar, setSimilar] = useState([]);

  // API calls.
  // ------------------------------------------------------------------------

  const MOVIE_URL = `
  https://api.themoviedb.org/3/movie/${movieId}?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&include_image_language&append_to_response=videos,images,credits,reviews,similar&include_image_language=en,null`;

  const MOVIE_UR2L = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`

  const ORIGINAL_IMG_URL = `https://image.tmdb.org/t/p/original`;

  // ------------------------------------------------------------------------

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const getMovie = await axios.get(MOVIE_URL);
        const getSimilar = await axios.get(MOVIE_UR2L);
        setMovie(getMovie.data);
        setSimilar(getSimilar.data);
      } catch (e) {
        console.log(e, "Error fetching data in MovieDetails component.");
      }
    };
    fetchMovieData();
  }, []);

  const MOVIE_GENRES = movie?.genres?.map((genre, index) => {
    if (movie?.genres?.length != index + 1) {
      return `${genre.name}, `;
    } else {
      return `${genre.name}.`;
    }
  });

  const MOVIE_CAST = movie?.credits?.cast?.map((cast) => (
    <CastCard key={cast.id} cast={cast} />
  ));

  const MOVIE_REVIEWS = movie?.reviews?.results?.map((review) => (
    <ReviewUI key={review.id} review={review} />
  ));

  const MOVIE_IMAGES = movie?.images?.backdrops?.map((image) => {
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

  const MOVIE_SIMILAR = similar?.results?.map((similar) => (
    <MediaCard media={similar} key={similar.id} />
  ));

  if (movie == []) {
    return <Loader />;
  }

  return (
    <MovieDetailsUI
      movie={movie}
      genres={MOVIE_GENRES}
      cast={MOVIE_CAST}
      reviews={MOVIE_REVIEWS}
      images={MOVIE_IMAGES}
      similar={MOVIE_SIMILAR}
    />
  );
};

export default MovieDetails;

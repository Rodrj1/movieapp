import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetailsUI from "./MovieDetailsUI";
import CastCard from "../CastCard/CastCard";
import ReviewUI from "./Review/ReviewUI";
import Loader from "../../../Loader/Loader";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [movieImages, setMovieImages] = useState([]);

  // API calls.
  // ------------------------------------------------------------------------

  const MOVIE_URL = `
  https://api.themoviedb.org/3/movie/${movieId}?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&append_to_response=videos`;
  const MOVIE_CAST_URL = `
  https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US`;
  const MOVIE_REVIEWS_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4d9c9de3bdf0d3b6837c49c086e3b190`;
  const MOVIE_IMAGES_URL = `
  https://api.themoviedb.org/3/movie/${movieId}/images?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&append_to_response=images&include_image_language=en,null`;
  const ORIGINAL_IMG_URL = `https://image.tmdb.org/t/p/original`;

  // ------------------------------------------------------------------------

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const getMovie = await axios.get(MOVIE_URL);
        const getMovieCast = await axios.get(MOVIE_CAST_URL);
        const getMovieReviews = await axios.get(MOVIE_REVIEWS_URL);
        const getMovieImages = await axios.get(MOVIE_IMAGES_URL);
        setMovie(getMovie.data);
        setMovieCast(getMovieCast.data);
        setMovieReviews(getMovieReviews.data);
        setMovieImages(getMovieImages.data);
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

  const MOVIE_CAST = movieCast?.cast?.map((cast) => (
    <CastCard key={cast.id} cast={cast} />
  ));

  const MOVIE_REVIEWS = movieReviews?.results?.map((review) => (
    <ReviewUI key={review.id} review={review} />
  ));

  const MOVIE_IMAGES = movieImages?.backdrops?.map((image) => {
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

  if (
    movie == [] ||
    movieCast == [] ||
    movieReviews == [] ||
    movieImages == []
  ) {
    return <Loader />;
  }

  return (
    <MovieDetailsUI
      movie={movie}
      genres={MOVIE_GENRES}
      cast={MOVIE_CAST}
      reviews={MOVIE_REVIEWS}
      images={MOVIE_IMAGES}
    />
  );
};

export default MovieDetails;

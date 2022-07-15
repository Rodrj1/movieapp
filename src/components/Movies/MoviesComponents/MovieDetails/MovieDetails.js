import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetailsUI from "./MovieDetailsUI";
import CastCard from "../CastCard/CastCard";
import ReviewUI from "./Review/ReviewUI";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [images, setImages] = useState([]);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  // API calls.
  // ------------------------------------------------------------------------

  const MOVIE_URL = `
  https://api.themoviedb.org/3/movie/${movieId}?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&append_to_response=videos`;
  const CAST_URL = `
  https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US`;
  const REVIEWS_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4d9c9de3bdf0d3b6837c49c086e3b190`;
  const MOVIE_IMAGES_URL = `
  https://api.themoviedb.org/3/movie/${movieId}/images?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&append_to_response=images&include_image_language=en,null`;
  const ORIGINAL_IMG_URL = `https://image.tmdb.org/t/p/original`;

  // ------------------------------------------------------------------------

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await axios.get(MOVIE_URL);
        const movieImages = await axios.get(MOVIE_IMAGES_URL);
        const castData = await axios.get(CAST_URL);
        const reviewsData = await axios.get(REVIEWS_URL);
        setReviews(reviewsData.data);
        setCast(castData.data);
        setMovie(movieData.data);
        setImages(movieImages.data);
      } catch (e) {
        console.log(e, "Error fetching data in Movie Details.");
      }
    };
    fetchMovie();
  }, []);

  const MOVIE_REVIEWS = reviews.results;
  const REVIEWS = MOVIE_REVIEWS?.map((review) => (
    <ReviewUI key={review.id} review={review} />
  ));

  const MOVIE_GENRES = movie.genres;
  const GENRES = MOVIE_GENRES?.map((genre, index) => {
    if (MOVIE_GENRES.length != index + 1) {
      return `${genre.name}, `;
    } else {
      return `${genre.name}.`;
    }
  });

  const CAST = cast?.cast?.map((cast) => (
    <CastCard key={cast.id} cast={cast} />
  ));
  const IMAGES = images?.backdrops?.map((image) => {
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

  if (movie == [] || images == []) {
    return <h1>Loading</h1>;
  }

  return (
    <MovieDetailsUI
      movie={movie}
      genres={GENRES}
      images={IMAGES}
      cast={CAST}
      reviews={REVIEWS}
    />
  );
};

export default MovieDetails;

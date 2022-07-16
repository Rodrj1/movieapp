import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CastCard from "../CastCard/CastCard";
import ReviewUI from "./Review/ReviewUI";
import TvShowDetailsUI from "./TvShowDetailsUI";

const TvShowDetails = () => {
  const { tvShowId } = useParams();
  const [tvShow, setTvShow] = useState([]);
  const [tvShowCast, setTvShowCast] = useState([]);
  const [tvShowReviews, setTvShowReviews] = useState([]);
  const [tvShowImages, setTvShowImages] = useState([]);

  // API calls.
  // ------------------------------------------------------------------------

  const TV_SHOW_URL = `
  https://api.themoviedb.org/3/tv/${tvShowId}?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&append_to_response=videos`;
  const TV_CAST_URL = `
  https://api.themoviedb.org/3/tv/${tvShowId}/credits?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US`;
  const TV_REVIEWS_URL = `https://api.themoviedb.org/3/tv/${tvShowId}/reviews?api_key=4d9c9de3bdf0d3b6837c49c086e3b190`;
  const TV_SHOW_IMAGES_URL = `
  https://api.themoviedb.org/3/tv/${tvShowId}/images?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&append_to_response=images&include_image_language=en,null`;
  const ORIGINAL_IMG_URL = `https://image.tmdb.org/t/p/original`;

  // ------------------------------------------------------------------------

  useEffect(() => {
    const fetchTvShowData = async () => {
      try {
        const getTvShow = await axios.get(TV_SHOW_URL);
        const getTvShowCast = await axios.get(TV_CAST_URL);
        const getTvShowReviews = await axios.get(TV_REVIEWS_URL);
        const getTvShowImages = await axios.get(TV_SHOW_IMAGES_URL);
        setTvShow(getTvShow.data);
        setTvShowCast(getTvShowCast.data);
        setTvShowReviews(getTvShowReviews.data);
        setTvShowImages(getTvShowImages.data);
      } catch (e) {
        console.log(e, "Error fetching data in TvShowDetails component.");
      }
    };
    fetchTvShowData();
  }, []);

  const TV_SHOW_GENRES = tvShow?.genres?.map((genre, index) => {
    if (tvShow?.genres?.length != index + 1) {
      return `${genre.name}, `;
    } else {
      return `${genre.name}.`;
    }
  });

  const TV_SHOW_CAST = tvShowCast?.cast?.map((cast) => (
    <CastCard key={cast.id} cast={cast} />
  ));

  const TV_SHOW_REVIEWS = tvShowReviews?.results?.map((review) => (
    <ReviewUI key={review.id} review={review} />
  ));

  const TV_SHOW_IMAGES = tvShowImages?.backdrops?.map((image) => {
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
    tvShow == [] ||
    tvShowImages == [] ||
    tvShowCast == [] ||
    tvShowReviews == []
  ) {
    return <h1>Loading</h1>;
  }

  return (
    <TvShowDetailsUI
      tvShow={tvShow}
      genres={TV_SHOW_GENRES}
      cast={TV_SHOW_CAST}
      reviews={TV_SHOW_REVIEWS}
      images={TV_SHOW_IMAGES}
    />
  );
};

export default TvShowDetails;

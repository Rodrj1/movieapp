import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import MediaContainerUI from "./MediaContainerUI";
import { useGetGenreData } from "../../../hooks/useGetGenreData";
import CategoryMedia from "./CategoryMedia";
import SeparatorDetails from "../../Separator/SeparatorDetails";
import "./MediaContainer.css";

const MediaContainer = ({ media }) => {
  const [mediaData, setMediaData] = useState([]);
  const [genre, setGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const { mediaByGenre } = useGetGenreData({ media });

  const TV_SHOWS_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=${page}`;

  const TV_SHOWS_SEARCH_URL = `https://api.themoviedb.org/3/search/tv?&api_key=1d2291efea2e84d18b938ffde00ff81b&query=${searchValue}&page=${page}`;

  const TV_SHOWS_GENRES_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=`;

  const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=${page}`;

  const MOVIES_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&api_key=1d2291efea2e84d18b938ffde00ff81b&query=${searchedValue}&page=${page}`;

  const MOVIES_GENRES_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchedValue == "" && genre == null) {
      const fetchMovies = async () => {
        try {
          const mediaType = media == "movie" ? MOVIES_URL : TV_SHOWS_URL;
          const getMediaData = await axios.get(mediaType);
          setMediaData((prevMovies) =>
            prevMovies.concat(getMediaData.data.results)
          );
          setHasMore(getMediaData.data.page < getMediaData.data.total_pages);
        } catch (e) {
          console.log(e, "Error fetching Movie/Movies in MoviesContainer.");
        }
      };
      fetchMovies();
    } else if (searchedValue != "" && genre == null) {
      const fetchMovies = async () => {
        try {
          const mediaType =
            media == "movie" ? MOVIES_SEARCH_URL : TV_SHOWS_SEARCH_URL;
          const getMediaData = await axios.get(mediaType);
          setMediaData((prevMovies) =>
            prevMovies.concat(getMediaData.data.results)
          );
          setHasMore(getMediaData.data.page < getMediaData.data.total_pages);
        } catch (e) {
          console.log(
            e,
            "Error fetching Movie/Movies by searching in MoviesContainer."
          );
        }
      };
      fetchMovies();
    }
  }, [searchedValue, page]);

  useEffect(() => {
    if (genre != null) {
      const fetchMovies = async () => {
        try {
          const mediaType =
            media == "movie" ? MOVIES_GENRES_URL : TV_SHOWS_GENRES_URL;
          const getMediaData = await axios.get(
            mediaType + genre + `&page=${page}`
          );
          setMediaData((prevMovies) =>
            prevMovies.concat(getMediaData.data.results)
          );
          setHasMore(getMediaData.data.page < getMediaData.data.total_pages);
        } catch (e) {
          console.log(
            e,
            "Error fetching Movie/Movies by genre in MoviesContainer."
          );
        }
      };
      fetchMovies();
    }
  }, [genre, page]);

  const handleOnChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    setGenre(null);
    setSearchedValue(searchValue);
    setHasMore(true);
    setMediaData([]);
    setPage((current) => current - current + 1);
  };

  const handleOnClick = (id) => {
    setGenre(id);
    setHasMore(true);
    setMediaData([]);
    setPage((current) => current - current + 1);
  };

  if (mediaData == []) {
    return <h1>Loading</h1>;
  }

  const ANIMATED_CATEGORY =
    media == "movie" ? "Animated Movies" : "Watch the best animated tv shows!";
  const HORROR_OR_MISTERY_CATEGORY =
    media == "movie"
      ? "Movies to see in the dark"
      : "Delve into the misteries of the unknown...";
  const MUSIC_OR_CRIME_CATEGORY =
    media == "movie"
      ? "The best Musicals that will get you to sing"
      : "Shows that will keep you watching to the end";
  const MUSIC_OR_CRIME_CATEGORY_CLASS = media == "movie" ? "music" : "crime";
  const ROMANCE_OR_ACTION_CATEGORY =
    media == "movie"
      ? "Check out the best Romances out there!"
      : "Grab the popcorn and watch the Action";

  return (
    <>
      <SeparatorDetails separatorClass="separator-to-header" />
      <CategoryMedia
        mediaData={mediaByGenre.animation}
        name={ANIMATED_CATEGORY}
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategoryMedia mediaData={mediaByGenre.comedy} name="Trending Comedies" />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategoryMedia
        mediaData={mediaByGenre.drama}
        name="Top Dramas you need to see"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategoryMedia
        mediaData={mediaByGenre.horror}
        name={HORROR_OR_MISTERY_CATEGORY}
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategoryMedia
        mediaData={mediaByGenre.music}
        name={MUSIC_OR_CRIME_CATEGORY}
        cl={MUSIC_OR_CRIME_CATEGORY_CLASS}
        cl2="music-container"
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategoryMedia
        mediaData={mediaByGenre.romance}
        name={ROMANCE_OR_ACTION_CATEGORY}
      />
      <SeparatorDetails separatorClass="separator-to-bottom" />
      <CategoryMedia
        mediaData={mediaByGenre.scifi}
        name="Break the line between fantasy and reality"
      />
      <div className="child infinite-scroll-container">
        <InfiniteScroll
          dataLength={mediaData?.length}
          hasMore={hasMore}
          next={() => {
            setPage((currentPage) => currentPage + 1);
          }}
          loader={<h1>Loading</h1>}
          style={{ width: "100%" }}
        >
          <MediaContainerUI
            mediaData={mediaData}
            media={media}
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick}
            hasMore={hasMore}
            setPage={setPage}
          />
        </InfiniteScroll>
      </div>
    </>
  );
};

export default MediaContainer;

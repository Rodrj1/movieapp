import { useEffect, useState } from "react";
import axios from "axios";
import MoviesContainerUI from "./TvShowsContainerUI";
import InfiniteScroll from "react-infinite-scroll-component";
import "../InfinitePopularMovies/MoviesContainer.css";
import TvShowsContainerUI from "./TvShowsContainerUI";

const TvShowsContainer = ({}) => {
  const [tvShows, setTvShows] = useState([]);
  const [genre, setGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const MOVIES_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=${page}`;

  const MOVIES_SEARCH_URL = `https://api.themoviedb.org/3/search/tv?&api_key=1d2291efea2e84d18b938ffde00ff81b&query=${searchValue}&page=${page}`;

  const MOVIES_GENRES_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchValue == "") {
          const getTvShows = await axios.get(MOVIES_URL);
          setTvShows((prevMovies) => prevMovies.concat(getTvShows.data.results));
        } else {
          const getSearchedTvShow = await axios.get(MOVIES_SEARCH_URL);
          setTvShows((prevMovies) =>
            prevMovies.concat(getSearchedTvShow.data.results)
          );
          setHasMore(
            getSearchedTvShow.data.page < getSearchedTvShow.data.total_pages
          );
        }
      } catch (e) {
        console.log(e, "Error fetching Movie/Movies in MoviesContainer.");
      }
    };
    fetchMovies();
  }, [page]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const getTvShowsInGenre = await axios.get(MOVIES_GENRES_URL + genre);
        setTvShows(getTvShowsInGenre.data.results);
      } catch (e) {
        console.log(
          e,
          "Error fetching Movies in MoviesContainer component by 'Genre'."
        );
      }
    };
    fetchMoviesByGenre();
  }, [genre]);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    setHasMore(true);
    setTvShows([]);
    setPage((current) => current - current + 1);
  };

  const handleOnChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleOnClick = (id) => {
    setGenre(id);
  };

  if (tvShows == []) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="child infinite-scroll-container">
      <InfiniteScroll
        dataLength={tvShows.length}
        hasMore={hasMore}
        next={() => {
          setPage((currentPage) => currentPage + 1);
        }}
        loader={<h1>Loading</h1>}
        style={{ width: "100%" }}
      >
        <TvShowsContainerUI
          tvShows={tvShows}
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          hasMore={hasMore}
          setPage={setPage}
        />
      </InfiniteScroll>
    </div>
  );
};

export default TvShowsContainer;

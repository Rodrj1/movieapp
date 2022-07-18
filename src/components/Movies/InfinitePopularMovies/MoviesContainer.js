import { useEffect, useState } from "react";
import axios from "axios";
import MoviesContainerUI from "./MoviesContainerUI";
import InfiniteScroll from "react-infinite-scroll-component";
import "./MoviesContainer.css";

const MoviesContainer = ({}) => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=${page}`;

  const MOVIES_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&api_key=1d2291efea2e84d18b938ffde00ff81b&query=${searchedValue}&page=${page}`;

  const MOVIES_GENRES_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=`;

  useEffect(() => {
    if (searchedValue == "" && genre == null) {
      const fetchMovies = async () => {
        try {
          const getMovies = await axios.get(MOVIES_URL);
          setMovies((prevMovies) => prevMovies.concat(getMovies.data.results));
          setHasMore(getMovies.data.page < getMovies.data.total_pages);
        } catch (e) {
          console.log(e, "Error fetching Movie/Movies in MoviesContainer.");
        }
      };
      fetchMovies();
    } else if (searchedValue != "" && genre == null) {
      const fetchMovies = async () => {
        try {
          const getMovies = await axios.get(MOVIES_SEARCH_URL);
          setMovies((prevMovies) => prevMovies.concat(getMovies.data.results));
          setHasMore(getMovies.data.page < getMovies.data.total_pages);
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
          const getMovies = await axios.get(
            MOVIES_GENRES_URL + genre + `&page=${page}`
          );
          setMovies((prevMovies) => prevMovies.concat(getMovies.data.results));
          setHasMore(getMovies.data.page < getMovies.data.total_pages);
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
    setMovies([]);
    setPage((current) => current - current + 1);
  };

  const handleOnClick = (id) => {
    setGenre(id);
    setHasMore(true);
    setMovies([]);
    setPage((current) => current - current + 1);
  };

  if (movies == []) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="child infinite-scroll-container">
      <InfiniteScroll
        dataLength={movies?.length}
        hasMore={hasMore}
        next={() => {
          setPage((currentPage) => currentPage + 1);
        }}
        loader={<h1>Loading</h1>}
        style={{ width: "100%" }}
      >
        <MoviesContainerUI
          movies={movies}
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

export default MoviesContainer;

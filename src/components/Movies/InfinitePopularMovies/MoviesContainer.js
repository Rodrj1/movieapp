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
  const [hasMore, setHasMore] = useState(true);

  const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=${page}`;

  const MOVIES_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?&api_key=1d2291efea2e84d18b938ffde00ff81b&query=${searchValue}&page=${page}`;

  const MOVIES_GENRES_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchValue == "") {
          const getMovies = await axios.get(MOVIES_URL);
          setMovies((prevMovies) => prevMovies.concat(getMovies.data.results));
        } else {
          const getSearchedMovie = await axios.get(MOVIES_SEARCH_URL);
          setMovies((prevMovies) =>
            prevMovies.concat(getSearchedMovie.data.results)
          );
          setHasMore(
            getSearchedMovie.data.page < getSearchedMovie.data.total_pages
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
        const getMoviesInGenre = await axios.get(MOVIES_GENRES_URL + genre);
        setMovies(getMoviesInGenre.data.results);
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
    setMovies([]);
    setPage((current) => current - current + 1);
  };

  const handleOnChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleOnClick = (id) => {
    setGenre(id);
  };

  if (movies == []) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="child infinite-scroll-container">
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((currentPage) => currentPage + 1)}
        loader={<h1>loading</h1>}
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

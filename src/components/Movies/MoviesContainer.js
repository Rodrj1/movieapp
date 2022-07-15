import { useEffect, useState } from "react";
import axios from "axios";
import MoviesContainerUI from "./MoviesContainerUI";
import InfiniteScroll from "react-infinite-scroll-component";
import "./MoviesContainer.css";

/* API calls */

const moviesWithGenresURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=";

/* Component */

const MoviesContainer = ({}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [genreFilter, setGenreFilter] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const moviesURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=${page}`;

  const searchURL = `https://api.themoviedb.org/3/search/movie?&api_key=1d2291efea2e84d18b938ffde00ff81b&query=${searchValue}&page=${page}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchValue == "") {
          const movies = await axios.get(moviesURL);
          setMovies((prevMovies) => prevMovies.concat(movies.data.results));
        } else {
            const filters = await axios.get(searchURL);
            console.log(filters.data);
            setMovies((prevMovies) => prevMovies.concat(filters.data.results));
            setHasMore(filters.data.page < filters.data.total_pages);
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
        const filterGenre = await axios.get(moviesWithGenresURL + genreFilter);
        setMovies(filterGenre.data.results);
      } catch (e) {
        console.log(
          e,
          "Error fetching Movie/Movies in MoviesContainer by 'Genre'."
        );
      }
    };
    fetchMoviesByGenre();
  }, [genreFilter]);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    setHasMore(true);
    setMovies([]);
    setPage(current => current - current + 1);
  };

  const handleOnChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleOnClick = (id) => {
    setGenreFilter(id);
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
        style={{width:"100%"}}
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

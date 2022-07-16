import MoviesInitialContainerUI from "./MoviesInitialContainerUI";
import { useState, useEffect } from "react";
import axios from "axios";

// API calls.
// ------------------------------------------------------------------------

const popularURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=1`;

const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`;

const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`;

const weeklyURL = `
https://api.themoviedb.org/3/trending/all/week?api_key=1d2291efea2e84d18b938ffde00ff81b`;

// ------------------------------------------------------------------------

const MoviesInitialContainer = () => {
  const [weeklyTrends, setWeeklyTrends] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const getWeeklyTrends = await axios.get(weeklyURL);
        const getPopularMovies = await axios.get(popularURL);
        const getUpcomingMovies = await axios.get(upcomingURL);
        const getTopRatedMovies = await axios.get(topRatedURL);
        setWeeklyTrends(getWeeklyTrends.data.results);
        setPopularMovies(getPopularMovies.data.results);
        setUpcomingMovies(getUpcomingMovies.data.results);
        setTopRatedMovies(getTopRatedMovies.data.results);
      } catch (e) {
        console.log(
          e,
          "Error fetching Movies in MoviesInitialContainer component."
        );
      }
    };
    fetchMovies();
  }, []);

  if (
    popularMovies == [] ||
    upcomingMovies == [] ||
    topRatedMovies == [] ||
    weeklyTrends == []
  ) {
    return <h1>LOADING</h1>;
  }

  return (
    <div>
      <MoviesInitialContainerUI
        weeklyTrends={weeklyTrends}
        popularMovies={popularMovies}
        upcomingMovies={upcomingMovies}
        topRatedMovies={topRatedMovies}
      />
    </div>
  );
};

export default MoviesInitialContainer;

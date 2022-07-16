import axios from "axios";
import { useState } from "react";

const MOVIES_POPULAR_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=1`;

const MOVIES_UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`;

const MOVIES_TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`;

const TV_SHOW_POPULAR_URL = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&page=1`;

const TV_SHOW_UPCOMING_URL = `https://api.themoviedb.org/3/tv/airing_today?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`;

const TV_SHOW_TOP_RATED_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=1d2291efea2e84d18b938ffde00ff81b&language=en-US&page=1`;

export const useSwitchTvMovie = () => {
  const [refreshedData, setRefreshedData] = useState([]);

  const changeMediaData = (category, mediatype) => {
    const fetchNewData = async () => {
      try {
        switch (category) {
          case "popular":
            if (mediatype == "Movies") {
              const getPopularTvShows = await axios.get(TV_SHOW_POPULAR_URL);
              setRefreshedData(getPopularTvShows.data.results);
            } else {
              const getPopularMovies = await axios.get(MOVIES_POPULAR_URL);
              setRefreshedData(getPopularMovies.data.results);
            }
            break;
          case "upcoming":
            if (mediatype == "Movies") {
              const getUpcomingTvShows = await axios.get(TV_SHOW_UPCOMING_URL);
              setRefreshedData(getUpcomingTvShows.data.results);
            } else {
              const getUpcomingMovies = await axios.get(MOVIES_UPCOMING_URL);
              setRefreshedData(getUpcomingMovies.data.results);
            }
            break;
          case "toprated":
            if (mediatype == "Movies") {
              const getTopRatedTvShows = await axios.get(TV_SHOW_TOP_RATED_URL);
              setRefreshedData(getTopRatedTvShows.data.results);
            } else {
              const getTopRatedMovies = await axios.get(MOVIES_TOP_RATED_URL);
              setRefreshedData(getTopRatedMovies.data.results);
            }
            break;
        }
      } catch (e) {
        console.log(e, "Error fetching Movies in useSwitchTvMovie hook.");
      }
    };
    fetchNewData();
  };

  const changeCategoryName = (categoryName, setCategoryName) => {
    switch (categoryName) {
      case "Popular Movies":
        setCategoryName("Popular TV Shows");
        break;
      case "Popular TV Shows":
        setCategoryName("Popular Movies");
        break;
      case "Upcoming Movies":
        setCategoryName("TV Shows Airing Today");
        break;
      case "TV Shows Airing Today":
        setCategoryName("Upcoming Movies");
        break;
      case "Top Rated Movies":
        setCategoryName("Top Rated TV Shows");
        break;
      case "Top Rated TV Shows":
        setCategoryName("Top Rated Movies");
        break;
      default:
        setCategoryName(categoryName);
        break;
    }
  }

  return {
    changeMediaData,
    changeCategoryName,
    refreshedData,
  };
};

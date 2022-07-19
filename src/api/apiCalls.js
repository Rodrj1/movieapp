import { useEffect, useState } from "react";
import axios from "axios";

export const useGetGenreData = ({ media }) => {
  const HORROR_OR_MISTERY_ID = media == "movie" ? 27 : 9648;
  const MUSIC_OR_CRIME_ID = media == "movie" ? 10402 : 80;
  const ROMANCE_OR_ACTION_ID = media == "movie" ? 10749 : 10759;
  const SCI_FI_ID = media == "movie" ? 878 : 10765;

  const FIXED_MEDIA_ANIMATION = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=16`;
  const FIXED_MEDIA_COMEDY = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=35`;
  const FIXED_MEDIA_DRAMA = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=18`;
  const FIXED_MEDIA_HORROR = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=${HORROR_OR_MISTERY_ID}`;
  const FIXED_MEDIA_MUSIC = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=${MUSIC_OR_CRIME_ID}`;
  const FIXED_MEDIA_ROMANCE = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=${ROMANCE_OR_ACTION_ID}`;
  const FIXED_MEDIA_SCIFI = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=1d2291efea2e84d18b938ffde00ff81b&with_genres=${SCI_FI_ID}`;

  const [mediaByGenre, setMediaByGenre] = useState([
    {
      animation: [],
      comedy: [],
      drama: [],
      horror: [],
      music: [],
      romance: [],
      science: [],
    },
  ]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const getMediaAnimation = await axios.get(FIXED_MEDIA_ANIMATION);
        const getMediaComedy = await axios.get(FIXED_MEDIA_COMEDY);
        const getMediaDrama = await axios.get(FIXED_MEDIA_DRAMA);
        const getMediaHorror = await axios.get(FIXED_MEDIA_HORROR);
        const getMediaMusic = await axios.get(FIXED_MEDIA_MUSIC);
        const getMediaRomance = await axios.get(FIXED_MEDIA_ROMANCE);
        const getMediaSciFi = await axios.get(FIXED_MEDIA_SCIFI);
        setMediaByGenre({
          animation: getMediaAnimation.data.results,
          comedy: getMediaComedy.data.results,
          drama: getMediaDrama.data.results,
          horror: getMediaHorror.data.results,
          music: getMediaMusic.data.results,
          romance: getMediaRomance.data.results,
          scifi: getMediaSciFi.data.results,
        });
      } catch (e) {
        console.log(
          e,
          "Error fetching Movie/Movies by genre in MoviesContainer."
        );
      }
    };
    fetchMovies();
  }, []);

  return { mediaByGenre };
};

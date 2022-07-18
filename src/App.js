import "./App.css";
import Header from "./components/Header/Header";
import MovieDetails from "./components/Movies/MoviesComponents/MovieDetails/MovieDetails";
import MoviesInitialContainer from "./components/Movies/MoviesInitialContainer/MoviesInitialContainer";
import Lists from "./components/Lists/Lists";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import MoviesContainer from "./components/Movies/InfinitePopularMovies/MoviesContainer";
import TvShowDetails from "./components/Movies/MoviesComponents/MovieDetails/TvShowDetails";
import TvShowsContainer from "./components/Movies/InfinitePopularTvShows/TvShowsContainer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="*" element={<h1>THIS PAGE DOES NOT EXIST!</h1>} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/" element={<MoviesInitialContainer />} />
          <Route path="/home" element={<MoviesInitialContainer />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/tv/:tvShowId" element={<TvShowDetails />} />
          <Route path="/allmovies" element={<MoviesContainer />} />
          <Route path="/alltvshows" element={<TvShowsContainer />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

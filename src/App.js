import "./App.css";
import Header from "./components/Header/Header";
import MainLayout from "./components/MainLayout/MainLayout";
import MovieDetails from "./components/Movies/MoviesComponents/MovieDetails/MovieDetails";
import Lists from "./components/Lists/Lists";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="*" element={<h1>THIS PAGE DOES NOT EXIST!</h1>} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/" element={<MainLayout />} />
          <Route path="/home" element={<MainLayout />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import MovieDetalis from "../pages/MovieDetails";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header/Header";
export const App = () => {
  return (<div>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies:movieId" element={ <MovieDetalis/>} />
    </Routes>
  </div>

  );
};


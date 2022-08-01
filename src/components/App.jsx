import MovieDetalis from "./MovieDetalis/MovieDetails";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout/Layout";
import Cast from "./Cast/Cast";
import MovieReviews from './MovieReviews/MovieReviews'


export const App = () => {
  return (< >
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index="/" element={<Home/>} />
          <Route path="movies" element={<Movies />}>
              <Route path=":movieId" element={<MovieDetalis />}>
                <Route path="cast" element={<Cast/>}/>
                <Route path="reviews" element={<MovieReviews/>}/>
              </Route>
           </Route>
      </Route>
    </Routes>
  </>

  );
};


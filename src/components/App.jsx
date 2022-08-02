import { lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetalis = lazy(() => import("../pages/MovieDetails"));
const Cast =lazy(()=>import('./Cast/Cast'))
const MovieReviews =lazy(()=>import('./MovieReviews/MovieReviews'))


export const App = () => {
  return (< >
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index="/" element={<Home/>} />
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetalis />}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<MovieReviews/>}/>
          </Route>
      </Route>
    </Routes>
  </>

  );
};


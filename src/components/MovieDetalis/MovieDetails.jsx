import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'service/fetchApi';
import MovieCard from '../MovieCard/MovieCard';
import { Wrap, NavLinkStyled } from './MovieDetails.styled';

export default function MovieDetalis() {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieById(movieId).then(setData);
  }, [movieId]);
  return (
    <>
      <MovieCard
        poster_path={data.poster_path}
        title={data.title}
        overview={data.overview}
        genres={data.genres}
      />
      <Wrap>
        <h3>Additional Information</h3>
        <NavLinkStyled to="cast">cast</NavLinkStyled>
        <NavLinkStyled to="reviews">reviews</NavLinkStyled>
        <Outlet />
      </Wrap>
    </>
  );
}

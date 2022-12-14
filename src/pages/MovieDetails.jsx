import styled from 'styled-components';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { fetchMovieById } from 'service/fetchApi';
import MovieCard from '../components/MovieCard/MovieCard';
import GoBackLink from 'components/GoBackLink/GoBackLink';

export default function MovieDetalis() {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchMovieById(movieId);
        await setData(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, [movieId]);

  if (!data) {
    return null;
  }
  const { poster_path, title, overview, genres } = data;

  return (
    <>
      <GoBackLink />
      <MovieCard
        poster_path={poster_path}
        title={title}
        overview={overview}
        genres={genres}
      />
      <Wrap>
        <h3>Additional Information</h3>
        <NavLinkStyled to="cast">cast</NavLinkStyled>
        <NavLinkStyled to="reviews">reviews</NavLinkStyled>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  background-color: #f1f1f1;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
  &.active {
    color: blue;
    font-weight: bold;
  }
`;

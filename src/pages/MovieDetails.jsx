import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams, Outlet ,NavLink} from 'react-router-dom';
import { fetchMovieById } from 'service/fetchApi';
import MovieCard from '../components/MovieCard/MovieCard';


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

 const Wrap= styled.div`
      background-color: #f1f1f1;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    display:flex;
    flex-direction:column;
`
 const NavLinkStyled= styled(NavLink)`
  text-decoration:none;
  color:black;
  &.active{
    color: blue;
    font-weight:bold;
  } 
`
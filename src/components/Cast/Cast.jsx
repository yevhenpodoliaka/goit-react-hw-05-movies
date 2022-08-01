import { fetchCast } from 'service/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastItem from './CastItem';
import { CastList } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCast(movieId).then(res => {
      setCast(res.cast);
    });
  }, [movieId]);

  return (
    <>
      <h2>cast</h2>
      <CastList>
        {cast.map(({ id, character, name, profile_path }) => {
          return (
            <CastItem
              key={id}
              character={character}
              name={name}
              profile_path={profile_path}
            />
          );
        })}
      </CastList>
    </>
  );
}

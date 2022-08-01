import { fetchCast } from 'service/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastItem from './CastItem';
import { CastList } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetch() {
    try {
      const response = await fetchCast(movieId)
      await setCast(response.cast)
    } catch (error) {
      
    }
    }

fetch()
  }, [movieId]);

  return (
    <>
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

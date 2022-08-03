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
        const response = await fetchCast(movieId);
        await setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [movieId]);
  return (
    <>
      {cast.length === 0 ? (
        <p>we dont have cast for this movie</p>
      ) : (
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
      )}
    </>
  );
}

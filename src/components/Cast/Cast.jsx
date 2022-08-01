import { fetchCast } from 'service/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultPoster from '../../img/no-poster.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCast(movieId).then(res => {
      setCast(res.cast)
    });
  },[movieId]);

  return (
    <>
      <h2>cast</h2>
      <ul>
        {cast.map(({ id, character, name, profile_path }) => {
          const imageUrl = profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : `${defaultPoster}`;
          return (
            <li key={id}>
              <img src={imageUrl} alt="" width={160} />
              <p>character: {character}</p>
              <p>name:{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}



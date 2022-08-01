import { fetchReviews } from 'service/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);
  return (
    <>
      <h2>MovieReviews</h2>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>author: {author}</p>
              <p>review:{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

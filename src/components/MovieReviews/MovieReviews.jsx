import { fetchReviews } from 'service/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieReviewsItem from './MovieReviewsItem';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetch() {
    try {
      const response = await fetchReviews(movieId)
      await setReviews(response.results)
    } catch (error) {
      
    }
    }

fetch()
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <MovieReviewsItem key={id} author={author} content={content} />
          );
        })}
      </ul>
    </>
  );
}

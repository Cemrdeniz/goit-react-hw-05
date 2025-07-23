import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(console.error);
  }, [movieId]);

  if (!reviews.length) return <p>No reviews found.</p>;

  return (
    <ul>
      {reviews.map(r => (
        <li key={r.id}>
          <p><strong>{r.author}</strong></p>
          <p>{r.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;

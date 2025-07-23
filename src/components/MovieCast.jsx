import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../services/api';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w200';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(console.error);
  }, [movieId]);

  if (!cast.length) return <p>No cast info found.</p>;

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.cast_id}>
          {actor.profile_path && <img src={`${IMAGE_BASE}${actor.profile_path}`} width="100" />}
          <p>{actor.name} as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;

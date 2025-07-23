import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovieDetails } from '../services/api';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(console.error);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main>
      <NavLink to={backLinkRef.current}>⬅ Back</NavLink>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <img src={`${IMAGE_BASE}${movie.poster_path}`} alt={movie.title} width="200" />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>

      <hr />
      <div>
        <NavLink to="cast" style={{margin:'100px'}} state={location.state}>Cast</NavLink>
        <NavLink to="reviews" state={location.state}>Reviews</NavLink>
      </div>
      <hr />
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;

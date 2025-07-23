import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>Trending Today!</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default HomePage;

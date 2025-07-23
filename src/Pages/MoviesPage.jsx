import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    searchMovies(query)
      .then(setMovies)
      .catch(console.error);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.query.value;
    setSearchParams({ query: value });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;

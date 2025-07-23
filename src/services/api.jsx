import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2QwMDVlYjRmZDFkMzFhMGNjMzZkMzkxMzk1MmRjOSIsIm5iZiI6MTc1MzI5MTY4Ni4yMzksInN1YiI6IjY4ODExYmE2ODVkNTQ1YzA2NDM4ZTkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.niEsWZDUmG_EBzwymjO2DNsQ669ljjf8Rs5egC0w6Q0';

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    ...options,
    params: {
      query,
    },
  });
  return res.data.results;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return res.data;
};

export const getMovieCast = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return res.data.cast;
};

export const getMovieReviews = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return res.data.results;
};

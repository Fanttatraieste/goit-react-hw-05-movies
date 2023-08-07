import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const key =
  process.env.REACT_APP_API_KEY ||
  `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzliZGFlZWZiY2VmMzYwMGM1Mzc2ZDdiYjE1MjAwZSIsInN1YiI6IjY0ODk5NTA2ZTI3MjYwMDBjOTMyYzA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I0pyIiTN3e3yKqy8iOOQ2oQi3mIPg0A-5_HoIOdhlQ8`;
// console.log(process.env.REACT_APP_API_KEY);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`,
  },
};
const linkStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList([]);
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        setMovieList(response.results);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '50px 80px' }}>
      <h2>Trending today</h2>
      {isLoading && <h3>The trending movies are loading</h3>}
      {!isLoading && <MovieList movies={movieList} />}
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <div style={linkStyles}>
      {movies.map((movie, index) => (
        // <p key={index}>{movie.title}</p>
        <Link key={index} to={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      ))}
    </div>
  );
}

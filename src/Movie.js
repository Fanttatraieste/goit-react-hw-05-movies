import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const key =
  process.env.REACT_APP_API_KEY ||
  `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzliZGFlZWZiY2VmMzYwMGM1Mzc2ZDdiYjE1MjAwZSIsInN1YiI6IjY0ODk5NTA2ZTI3MjYwMDBjOTMyYzA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I0pyIiTN3e3yKqy8iOOQ2oQi3mIPg0A-5_HoIOdhlQ8`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`,
  },
};

export default function Movie() {
  const { id } = useParams();

  return (
    <div>
      <MovieCard movieId={id} />
      <div
        style={{
          border: '1px solid black',
          padding: '10px',
          marginLeft: '50px',
        }}
      >
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

function MovieCard({ movieId }) {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovie(response);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  return (
    <>
      {loading && <p>Content is loading</p>}
      {!loading && (
        <div
          style={{
            display: 'flex',
            gap: '25px',
            alignItems: 'center',
            margin: '50px',
          }}
        >
          <img
            style={{ width: '350px', height: '350px' }}
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <div>
            <h2>
              {movie.title}({movie.release_date.split('-')[0]})
            </h2>
            <p>User Score: {Math.floor(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul
              style={{
                display: 'flex',
                listStyleType: 'none',
                gap: '10px',
                padding: '0px',
              }}
            >
              {movie.genres.map(genre => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

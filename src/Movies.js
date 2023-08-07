import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

const linkStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const inputRef = useRef();
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const movieTitle = inputRef.current.value;
    console.log(movieTitle);

    setLoading(true);

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setMovieList(response.results);
        console.log(movieList);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
        inputRef.current.value = '';
      });
  }

  return (
    <div style={{ padding: '20px 30px' }}>
      <h2>Movies Route</h2>
      <form
        style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
        onSubmit={e => handleSubmit(e)}
        role="search"
      >
        <input
          ref={inputRef}
          type="search"
          placeholder="Search movie..."
          style={{ width: '200px', height: '30px', outline: 'none' }}
        />
        <button className="button-89" type="submit">
          Search
        </button>
      </form>
      {!loading && <MovieList movies={movieList} />}
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

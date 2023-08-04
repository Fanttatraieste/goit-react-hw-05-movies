import { useEffect, useState } from 'react';

const key = process.env.REACT_APP_API_KEY;
// console.log(process.env.REACT_APP_API_KEY);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`,
  },
};

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState({});

  // fetch(
  //   'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  //   options
  // )wponse.json())
  //   .then(response => {
  //     console.log(response);
  //     setMovieList(response);
  //   })
  //   .catch(err => console.error(err));

  useEffect(() => {
    setMovieList([]);
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        // console.log(key);
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
    <div>
      {movies.map((movie, index) => (
        <p key={index}>{movie.title}</p>
      ))}
    </div>
  );
}

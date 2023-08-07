import Cast from 'Cast';
import Header from 'Header';
import Home from 'Home';
import Movie from 'Movie';
import Movies from 'Movies';
import Review from 'Review';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
}

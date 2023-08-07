import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Cast from 'Cast';
const Cast = lazy(() => import('Cast'));
// import Header from 'Header';
const Header = lazy(() => import('Header'));
// import Home from 'Home';
const Home = lazy(() => import('Home'));
// import Movie from 'Movie';
const Movie = lazy(() => import('Movie'));
// import Movies from 'Movies';
const Movies = lazy(() => import('Movies'));
// import Review from 'Review';
const Review = lazy(() => import('Review'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

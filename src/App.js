import Header from 'Header';
import Home from 'Home';
import Movies from 'Movies';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

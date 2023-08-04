import { useState } from 'react';

const API_KEY = process.env.API_KEY;

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <h3>The trending movies are loading</h3>}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const key = process.env.REACT_APP_API_KEY;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`,
  },
};

export default function Review() {
  const [loading, setLoading] = useState(true);
  const [castList, setCastList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setCastList(response.results))
      .catch(err => console.error(err))
      .finally(setLoading(false));
  }, [id]);

  return (
    <>
      {loading && <p>The cast is loading</p>}
      {!loading &&
        castList.map(person => (
          <div
            key={person.id}
            style={{
              margin: '50px',
              backgroundColor: '#F5F5F5',
              border: '1px solid #1A120B',
              padding: '10px',
            }}
          >
            <h3>Author: {person.author}</h3>
            <p>{person.content}</p>
          </div>
        ))}
    </>
  );
}

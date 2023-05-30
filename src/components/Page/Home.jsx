import { useEffect, useState } from 'react';
import { Continer } from 'style/Container.styled';
import SearchTrending from 'API/API';
import MoviesList from 'components/Movies/MoviesList';
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    SearchTrending().then(({ results }) => setData(results));
  }, []);

  return (
    <Continer>
      <MoviesList movies={data} />
    </Continer>
  );
}

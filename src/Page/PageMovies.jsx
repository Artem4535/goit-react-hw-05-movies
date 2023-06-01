import { useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import { SearchMoviesByQuery } from 'API/API';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';

export default function PageMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    SearchMoviesByQuery(query).then(data => {
      if (!query) {
        return;
      }

      setMovies(data);
    });
  }, [query]);

  const onSubmit = searchQuery => setSearchParams({ query: searchQuery });
  return (
    <>
      <Form onSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
}

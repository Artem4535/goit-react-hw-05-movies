import { LinkList } from 'style/Home.style';
import { Link, useLocation } from 'react-router-dom';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <LinkList>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </LinkList>
    </>
  );
};

export default MoviesList;

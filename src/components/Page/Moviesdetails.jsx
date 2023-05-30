import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { SearchById } from 'API/API';
import { useState, useEffect, useRef, Suspense } from 'react';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

function MoviesDetails() {
  const { movieId } = useParams();
  const [title, setTitle] = useState();
  const [poster, setPoster] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from) || '/movies';

  useEffect(() => {
    if (movieId) {
      SearchById(movieId).then(({ original_title, poster_path }) => {
        setTitle(original_title);
        setPoster(poster_path);
      });
    }
  }, [movieId]);

  return (
    <>
      <p>{title}</p>
      <Link to={backLink.current}>Go Back</Link>
      <img src={poster ? `${IMG_URL}${poster}` : poster} alt={poster} />
      <h2>Infomation details</h2>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MoviesDetails;

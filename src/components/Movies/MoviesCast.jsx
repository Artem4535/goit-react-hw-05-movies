import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchMoviesCast } from '../../API/API';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log('movieId', movieId);

  useEffect(() => {
    SearchMoviesCast(`${movieId}`).then(setCast);
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(({ original_name, profile_path }) => (
          <li>
            <img
              src={profile_path ? `${IMG_URL}${profile_path}` : profile_path}
              alt={original_name}
              width="150"
            />
            <h2>{original_name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesCast;

import { SearchMoviesReviews } from '../../API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoviesReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    console.log('revs', movieId);
    SearchMoviesReviews(`${movieId}`).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author }) => <div>{author}</div>)
      ) : (
        <div>No Reviews</div>
      )}
    </>
  );
};

export default MoviesReviews;

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('../components/Page/Home'));
const MoviesDetails = lazy(() => import('../components/Page/Moviesdetails'));
const MoviesCast = lazy(() => import('../components/Movies/MoviesCast'));
const MoviesReviews = lazy(() => import('../components/Movies/MoviesReviews'));
const PageMovies = lazy(() => import('../components/Page/PageMovies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<PageMovies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const config = {
  params: {
    api_key: 'e1a73f9bc0bcf167e9f1fe8a41807ba9',
  },
};

export default async function SearchTrending() {
  try {
    const res = await axios.get(`trending/movie/day`, config);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function SearchById(id) {
  try {
    const res = await axios.get(`movie/${id}`, config);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function SearchMoviesCast(id) {
  try {
    const res = await axios.get(`movie/${id}/credits`, config);
    return res.data.cast;
  } catch (error) {
    console.log(error.message);
  }
}

export async function SearchMoviesReviews(id) {
  try {
    const res = await axios.get(`movie/${id}/reviews`, config);
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function SearchMoviesByQuery(query) {
  const configs = {
    params: {
      api_key: 'e1a73f9bc0bcf167e9f1fe8a41807ba9',
      query,
    },
  };
  try {
    const res = await axios.get(`search/movie`, configs);
    console.log('query', res);
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

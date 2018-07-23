import axios from 'axios';
import { GET_POPULAR, GET_UPCOMING, SEARCHED_MOVIES, SEARCH_VALUE } from './types';
import { apiKey } from '../config/keys';


export const getPopular = () => async ( dispatch) => {
  const popularUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const res = await axios.get(popularUrl);
  
  dispatch({ type: GET_POPULAR, payload: res.data.results });
};

export const getUpcoming = () => async (dispatch) => {
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
  const res = await axios.get(upcomingUrl);
  
  dispatch({ type: GET_UPCOMING, payload: res.data.results });
};

export const getSearchedMovies = (searchQuery) => async (dispatch) => {

  const searchingUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;
  const res = await axios.get(searchingUrl);
  
  dispatch({ type: SEARCHED_MOVIES, payload: res.data.results });
}

export const setSearchValue = (value) => (dispatch) => {

  dispatch({ type: SEARCH_VALUE, payload: value });
}
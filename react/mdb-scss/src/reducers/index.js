import { combineReducers } from 'redux';
import getPopularReducer from './getPopularReducer';
import getUpcomingReducer from './getUpcomingReducer';
import searchedReducer from './searchedReducer';
import setSearchValueReducer from './setSearchValueReducer';

export default combineReducers({
  popularMovies: getPopularReducer,
  upcomingMovies: getUpcomingReducer,
  searchedMovies: searchedReducer,
  searchValue: setSearchValueReducer
});
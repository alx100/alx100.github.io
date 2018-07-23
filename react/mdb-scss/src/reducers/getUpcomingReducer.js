import { GET_UPCOMING } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case GET_UPCOMING:
      return action.payload || false;
    default:
      return state;
  }
}
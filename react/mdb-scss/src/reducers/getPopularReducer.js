import { GET_POPULAR } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case GET_POPULAR:
      return action.payload || false;
    default:
      return state;
  }
}
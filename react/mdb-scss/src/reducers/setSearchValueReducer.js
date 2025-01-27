import { SEARCH_VALUE } from '../actions/types';

export default function (state = '', action) {
  switch(action.type) {
    case SEARCH_VALUE:
      return action.payload || false;
    default:
      return state;
  }
}
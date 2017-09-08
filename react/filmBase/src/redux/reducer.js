import {combineReducers} from 'redux';
import {films,token,rentedFilm,selectFilm,basketOfFilms} from'./reducers'

export default combineReducers (
    {
        films,
        token,
        rentedFilm,
        selectFilm,
        logged_in,
        fetching,
        basketOfFilms
    }
)

function logged_in(state=false,action){
    if (action.type=='SET_LOGGED')return !state 
    return state
}
function fetching(state=false,action){
    if (action.type=='SEND_FETCH')return !state 
    return state
}
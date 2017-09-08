
export function rentedFilm(state='',action){
    if(action.type === 'GET_RENTED_FILM'){
        return action.data||{}
    }
    return state;
}
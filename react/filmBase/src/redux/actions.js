import * as cnt from'./const'
export * from './actions/'

export function setToken(token){
    return{
        type:cnt.SET_TOKEN,
        token
    }
}
export function getRentedFilm(data){
    return{
        type:cnt.GET_RENTED_FILM,
        data
    }
}
export function chooseFilm(film){
    return{
        type:cnt.CHOOSE_FILM,
        film
    }
}
export function set_logged(){
    return{
        type:cnt.SET_LOGGED
    }
}
export function fetching(){
    return{
        type:cnt.SEND_FETCH
    }
}
export function addToBascket(film){
    return{
        type: 'CLICK_BUY_FILM',
        film
    }
}

export function incrementItem(id){
    return{
        type:'INCREMENT',
        id
    }
}
export function decrementItem(id){
    return{
        type:'DECREMENT',
        id
    }
}
export function deleteItemFromCart(id){
    return{
        type:'DELETE_ITEM_FROM_CART',
        id
    }
}
// try redux-saga middlaware
export function getFilms2(){
    return{
        type:'FETCH_FILMS_REQUEST'
    }
} 
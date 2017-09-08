import {put,takeEvery,call,all} from 'redux-saga/effects'
import {Api} from'./api'

export function* fetchFilms(){
    try{
        yield put({type:'SEND_FETCH'})
        const data = yield call(Api.fetchFilms)  
        yield put({type:'UPDATE_FILMS',result:data.result})
        yield put({type:'SEND_FETCH'})
    }
    catch(e){
        console.log('error',e)
    }
}

export function* watchFetchFilms(){
    yield takeEvery('FETCH_FILMS_REQUEST',fetchFilms)
}

export function* addToBasket(action){
    try{
        yield put({type:'BUY_FILM',film:action.film})
        yield put({type:'CHANGE_IN_BASKET',id:action.film.id})
    }
    catch(e){
        console.log('error',e)
    }
}
export function* watchBuyFilm(){
    yield takeEvery('CLICK_BUY_FILM',addToBasket)
}

export function* deleteToBasket(action){
    try{
        yield put({type:'DELETE_ITEM',id:action.id})
        yield put({type:'CHANGE_IN_BASKET',id:action.id})
    }
    catch(e){
        console.log('error',e)
    }
}
export function* watchDelFromCart(){
    yield takeEvery('DELETE_ITEM_FROM_CART',deleteToBasket)
}


export function* rootSaga(){
    yield all([
        watchFetchFilms(),
        watchBuyFilm(),
        watchDelFromCart()
    ])
}


import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {SelectFilm} from'../components'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        film:state.selectFilm,
        logged_in:state.logged_in,
        inBasket:state.selectFilm.inBasket
    }
}

export let ConnectSelectFilm= connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilm)

import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {Basket} from'../components'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        count: state.basketOfFilms.length,
        films: state.basketOfFilms
    }
}

export let ConnectBasket= connect(
    mapStateToProps,
    mapDispatchToProps
)(Basket)

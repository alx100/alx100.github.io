import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {Films} from'../components'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        films:state.films,
        logged_in:state.logged_in
    }
}

export let ConnectFilms = connect(
    mapStateToProps,
    mapDispatchToProps
)(Films)

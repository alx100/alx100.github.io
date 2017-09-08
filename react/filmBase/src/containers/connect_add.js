import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {AddFilm} from'../components'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        
    }
}

export let ConnectAddFilm= connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFilm)

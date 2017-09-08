import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {Login} from'../components'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        logged_in:state.logged_in
    }
}

export let ConnectLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

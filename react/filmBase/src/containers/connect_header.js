import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {Header} from'../components'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        logged_in:state.logged_in,
        fetching:state.fetching
    }
}

export let ConnectHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

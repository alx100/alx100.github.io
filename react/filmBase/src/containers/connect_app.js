import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {App} from'../App'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        //actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        fetching:state.fetching
    }
}

export let ConnectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

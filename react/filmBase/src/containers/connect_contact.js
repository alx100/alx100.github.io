import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {ContactUs} from'../components'
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

export let ConnectContactUs = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactUs)

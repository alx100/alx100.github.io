import React, { Component } from 'react';
import './login.css'

export class Login extends Component {
  render() {
    let user,pass,reg_name='',reg_pass='',reg_login='',reg_age='',reg_tel=''
    let {logged_in,actions} = this.props
    let visible = logged_in?'none':'block'
    return (
        <div>
            <span className="success">Login</span>
            <div className="row" style={{display:visible}}>
                <div className="login">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user fa-fw"></i></span>
                        <input type="text" className="form-control" ref={input=>user=input} placeholder="Login"/>
                    </div>
                    
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-key fa-fw"></i></span>
                        <input type="text" className="form-control" ref={input=>pass=input} placeholder="Password"/>
                    </div>
                    
                    <button onClick={()=>actions.login(user.value,pass.value)}>login</button>    
                </div>
            </div>
            <div className="row" style={{display:visible}}>
                <span id="auth">Registration</span>
                <div className="auth">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user-o fa-fw"></i></span>
                        <input ref={input=>reg_name=input} type="text" className="form-control" placeholder="username"/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-key  fa-fw"></i></span>
                        <input ref={input=>reg_pass=input} type="text" className="form-control" placeholder="password"/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user-o fa-fw"></i></span>
                        <input ref={input=>reg_login=input} type="text" className="form-control" placeholder="login"/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user-secret fa-fw"></i></span>
                        <input ref={input=>reg_age=input} type="text" className="form-control" placeholder="age"/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-phone fa-fw"></i></span>
                        <input ref={input=>reg_tel=input} type="text" className="form-control" placeholder="telephone"/>
                    </div>
                    <button onClick={()=>{
                             let obj_auth={
                                    username:reg_name.value,
                                    password:reg_pass.value,
                                    login:reg_login.value,
                                    age:Number(reg_age.value),
                                    telephone:reg_tel.value
                                }
                        actions.auth(obj_auth)
                        //document.getElementsByClassName('auth')[0].remove();
                        }}>send</button>
                </div>
            </div>         
        </div>
    );
  }
}


import React, { Component } from 'react';
import './contactUs.css'

export class ContactUs extends Component {
  render() {
      let name,email,msg
      let{actions} =this.props
    return (
        <div>
            <span className="success">Get-in-touch</span>
            <div className="row">
                <div className="login">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user fa-fw"></i></span>
                        <input type="text" className="form-control" ref={input=>name=input} placeholder="Name"/>
                    </div>                  
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope-o fa-fw"></i></span>
                        <input type="text" className="form-control" ref={input=>email=input} placeholder="Email"/>
                    </div>  
                    <div className="form-group">
                    <textarea className="form-control" rows="5" id="comment" ref={input=>msg=input} placeholder="Talk with me.."></textarea>
                  </div>                 
                    <button onClick={()=>cors(name.value,email.value,msg.value)}>send</button>    
                </div>
            </div>       
        </div>
    );
  }
}

function cors(name,email,msg){
    let url = 'http://e-coding.club/php/order.php'
    if(name.trim()!==0&&email.trim()!==0&&msg.length!=0){
        fetch(url,{
        method:'post',
        mode:'no-cors',
        headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },
        body:
            `name=${name}&email=${email}&message=${msg}&send=1`
        })
        .then(function(res){
            return res.text()
                .then(text=>console.log(text))
        })
    }
  }
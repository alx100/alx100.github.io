import React, { Component } from 'react';
import './addFilm.css'

export class AddFilm extends Component {
  render() {
    let name,year,ge_drama,ge_comedy,ge_horror,genres=[]
    let {actions} = this.props
    return (
        <div>
            <div className="row">
                <div className="movie">
                    <span className="title">New movie:</span>
                    <input type="text" className="form-control" ref={input=>name=input} placeholder="Name"/>
                    <input type="text" className="form-control" ref={input=>year=input} placeholder="Year"/>
                    <div className="genres">
                            <input ref={input=>ge_drama=input}type="checkbox" value="3"/>Drama <br/>             
                            <input ref={input=>ge_comedy=input}type="checkbox" value="1"/>Comedy <br/>
                            <input ref={input=>ge_horror=input}type="checkbox" value="2"/>Horror <br/>
                    </div>
                    <button onClick={()=>{
                        ge_drama.checked&&genres.push(+ge_drama.value)
                        ge_comedy.checked&&genres.push(+ge_comedy.value)
                        ge_horror.checked&&genres.push(+ge_horror.value)
                        if(name.value.trim()!=0&&year.value.trim()!=0&&genres.length!=0)
                        actions.addFilm(name.value,+year.value,genres)
                        else document.getElementsByClassName('add-result')[0].innerHTML = 'Incorrect data...'
                        genres=[]
                        name.value=year.value=''
                        }}>add</button>  
                    <span className="add-result"></span>  
                </div>
            </div>      
        </div>
    );
  }
}


import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
export class Item extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        $(".selectFilm").toggleClass('open')
    }
  render() {
    let {item,actions} = this.props
    let {name,year,added_at,genres} = item
    let str_genres ='';
    if(genres!==null)
    genres.map((item,index)=>{
        index==0?str_genres+=`${item.name}`:str_genres+=`,${item.name}`
    })
    let link = name.toLowerCase().trim().replace(/\s/ig, '-')
    return (
        <Link to={`film/${link}`} onClick={(e)=>{
            e.preventDefault()
            this.handleClick();
            actions.chooseFilm(item)}}>
            <div className="row film-item">      
                <div className="col-md-3">{name}</div>             
                <div className="col-md-1">{year}</div>
                <div className="col-md-4">{str_genres}</div>
                <div className="col-md-3">{added_at.substr(0,10)}</div>         
            </div>
        </Link>
    );
  }
}



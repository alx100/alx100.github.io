import React, { Component } from 'react';
import $ from 'jquery'
import './selectFilm.css'
export class SelectFilm extends Component {
  render() {
    let {logged_in,film,actions} = this.props
    let {name,year,id,inBasket} = film
    return (

        <div className="selectFilm">
          <div className="center">
            <div className="content">
              <img src="/img/film.jpg" alt=""/>
              <div className="property">
                <span>{name}</span>
                <span>{year}</span>
              </div>
              <div>This film is very good! Because ....mmmm i dont know.... :P </div>
              <div className="row select-footer">
                <button className="btn btn-link" onClick={()=>$(".selectFilm").toggleClass('open')}>back</button>
                <button disabled={!logged_in} className="btn btn-primary btn-sm" onClick={()=>actions.toRent(id)}>rent</button>
                <button className="btn btn-primary btn-sm" disabled={inBasket} onClick={()=>actions.addToBascket(film,film.id)}>buy</button>
              </div>
              <div className="rent-result"></div>
            </div>
          </div>
        </div>
    );
  }
}


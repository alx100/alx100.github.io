import React, { Component } from 'react';

export class Item extends Component {
  render() {
    let {item,actions} = this.props
    return (
        <div className="films-item">
            <div className="row row-item">
                <div className="col-md-3">{item.film.name}</div>
                <div className="col-md-3">{item.film.year}</div>
                <div className="col-md-3">
                <i className="fa fa-minus" aria-hidden="true" onClick={()=>actions.decrementItem(item.film.id)}></i>
                <span className="count-item">{item.count}</span>
                <i className="fa fa-plus" aria-hidden="true" onClick={()=>actions.incrementItem(item.film.id)}></i>
                </div>
                <div className="col-md-3 item-delete" onClick={()=>actions.deleteItemFromCart(item.film.id)}><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></div> 
            </div>
            <hr/>
        </div>
    );
  }
}


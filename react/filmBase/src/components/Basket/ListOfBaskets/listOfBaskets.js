import React, { Component } from 'react';
import $ from 'jquery'
import './listOfBaskets.css'

import {Item} from './Item'
export class ListOfBaskets extends Component {
  render() {
    let {films,actions} = this.props
    return (
        <div className="app-listBaskets"> 
            <div className="listBaskets-head">
                <h1>Your choice:</h1>
                <i className="fa fa-times fa-3x listBasketsClose" onClick={()=>$('.baskets-list').toggleClass('closed')} aria-hidden="true"></i>
            </div>
            <hr/>
            {
                films.map((item,index)=>{
                    return <Item item={item} key={index} actions={actions}/>
                })
            }
        </div>
    );
  }
}


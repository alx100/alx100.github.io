import React, { Component } from 'react';
import cn from 'classnames'
import {Link}from'react-router-dom'


export class Item extends Component {
  render() {
    let { onclick, logged_in, loggin,children} = this.props
    let cleverName = cn({'disabled':!logged_in})
    return (
        <li className="header-menu-item" >
            <Link className={cleverName} to={children.trim().replace(' ','-')} onClick={onclick} >{children}</Link>
        </li>
    );
  }
}


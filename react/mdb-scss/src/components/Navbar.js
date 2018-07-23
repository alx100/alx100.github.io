import React, { Component } from 'react';
import logo from './../images/logo.svg';


class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   console.log(this.props.handleInput);
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
          <div className="header-row mb-3">
            <a className="navbar-brand">
              <img src={logo} width="60" alt="logo" />
            </a>
            <h2 className="header-title"> The Movie Database </h2>
          </div>
           
          <div className="input-group navbar-form mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search"></i>
              </span>
            </div>
            <input 
              type="text"
              onChange={this.props.handleInput}
              // value={this.props.value}
              className="form-control" 
              placeholder="Search" 
              aria-label="Username" 
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
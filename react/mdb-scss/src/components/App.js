import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import MainPage from './MainPage';


class App extends Component {

  componentDidMount(){
    this.props.getPopular();
    this.props.getUpcoming();
  }

	render() {
		return (
			<div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={MainPage} />
          </div>
        </BrowserRouter>
			</div>
		);
	}
}


export default connect(false, actions)(App);

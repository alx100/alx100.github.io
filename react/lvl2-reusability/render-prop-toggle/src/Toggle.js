import React, { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        {this.state.on && (
          <div>
            <h1>To Be Toggled</h1>
          </div>
        )}
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

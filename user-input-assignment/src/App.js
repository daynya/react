import React, { Component } from 'react';
import './App.css';
import ''

const user = (props) => {
  return (
      <div>
          <input type="text"  value="Daynya"/>
      </div>
  )
};

class App extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

export default App;

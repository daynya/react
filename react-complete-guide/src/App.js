import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Daynya', age: 37 },
      { name: 'Michael', age: 45 },
      { name: 'Seymour', age: 10 }
    ],
    otherState: 'other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 37.75 },
        { name: 'Michael', age: 45 },
        { name: 'Hemi', age: 12 }
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Daynya', age: 37.75 },
        { name: event.target.value, age: 45 },
        { name: 'Hemi', age: 12 }
      ] 
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Daynya!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
        </Person>
        <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'D')} 
          changed={this.nameChangedHandler} >My hobbies: magic
        </Person>
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;

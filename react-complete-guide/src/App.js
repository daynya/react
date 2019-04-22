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
    otherState: 'other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons)  {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;

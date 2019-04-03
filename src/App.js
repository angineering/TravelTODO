import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Holiday Checklist</h1>
          <p>Got an upcoming holiday? Our lists will ensure you won't forget anything!</p>
        </header>
        <main>
          <TodoList title="Packing List" />
          <TodoList title="Instagram Spots" />
        </main>
      </div>
    );
  }
}

export default App;

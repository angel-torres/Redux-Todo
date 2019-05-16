import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoItems />
      </div>
    );
  }
}

export default App;

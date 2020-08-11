import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="cotainer">

        <Users />
        </div>
      </div>
    );

  }
}

export default App;

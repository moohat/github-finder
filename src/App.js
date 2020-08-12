import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import './App.css';
import Users from './components/users/Users';

class App extends Component {

  state = {
    loading: false,
    users : []
  }

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
    this.setState({
      loading: true,
      users: res.data
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="cotainer">

          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );

  }
}

export default App;

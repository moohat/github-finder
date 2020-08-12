import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';


const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

class App extends Component {

  state = {
    loading: false,
    users: []
  }

  // async componentDidMount() {
  //   console.log('ini adalah env', clientSecret);

  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`);
  //   console.log(res.data);
  //   this.setState({
  //     loading: false,
  //     users: res.data
  //   })
  // }

  //Search Github Users
  searchUsers = async text => {
    // console.log(text);
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`);
    console.log(res.data);
    this.setState({
      users: res.data.items,
      loading: false
    })
  }

  //clear users from state

  clearUsers = () => {
    this.setState({
      users: [], loading: false
    })
  }


  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="cotainer">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true: false}/>

          <Users loading={loading} users={users} />
        </div>
      </div>
    );

  }
}

export default App;

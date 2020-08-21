import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import './App.css';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import About from './components/pages/About';


const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

class App extends Component {

  state = {
    loading: false,
    user: {},
    users: [],
    repos:[],
    alert: null,
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
    this.setState({
      users: res.data.items,
      loading: false
    })
  }

  //get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`);
    // console.log(res.data);
    this.setState({
      user: res.data,
      loading: false
    })
  }

  //get users repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`);
    // console.log(res.data);
    this.setState({
      repos: res.data,
      loading: false
    })
  }


  //clear users from state

  clearUsers = () => {
    this.setState({
      users: [], loading: false
    })
  }

  //set Alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => {
      this.setState({ alert: null })
    }, 3000);
  }


  render() {
    const { users, user,repos, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />

                    <Users loading={loading} users={users} />

                  </Fragment>
                )}
              />

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  user={user} loading={loading} />
              )} />

            </Switch>
          </div>
        </div>
      </Router>


    );

  }
}

export default App;

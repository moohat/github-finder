import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import axios from 'axios';

import GithubState from './context/github/githubState';
import './App.css';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import About from './components/pages/About';


const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const App = () => {

  //!state using function
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //! state using class
  // state = {
  //   loading: false,
  //   user: {},
  //   users: [],
  //   repos:[],
  //   alert: null,
  // }

  //Search Github Users
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`);
    // this.setState({
    //   users: res.data.items,
    //   loading: false
    // })
    setUsers(res.data.items);
    setLoading(false);
  }

  //get single Github user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`);
    setUser(res.data);
    setLoading(false);
    
  }

  //get users repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`);
    // console.log(res.data);
    setRepos(res.data);
    setLoading(false);
  }


  //clear users from state

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  //set Alert
  const showAlert = (msg, type) => {
    setAlert( { msg, type });    
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  return (
      
    <GithubState>

   
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />

                    <Users loading={loading} users={users} />

                  </Fragment>
                )}
              />

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  user={user} loading={loading} />
              )} />

            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>

    );

}

export default App;

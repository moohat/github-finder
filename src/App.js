import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';
import './App.css';
import User from './components/users/User';
import { Alert } from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';




const App = () => {

  //!state using function
  // const [alert, setAlert] = useState(null);

  //! state using class
  // state = {
  //   loading: false,
  //   user: {},
  //   users: [],
  //   repos:[],
  //   alert: null,
  // }


  return (
      
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>

    );

}

export default App;

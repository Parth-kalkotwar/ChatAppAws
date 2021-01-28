import React from 'react'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Button } from '@material-ui/core';
import Home from "./component/Home";
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path = "/" exact component = {Home} to = "/" />
            <Route path = "/login" component={Login} />
            <Route path = "/register" component={Register} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

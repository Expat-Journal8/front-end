import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './api/PrivateRoute';
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp";
import Profile from './Components/Profile';
import Stories from './Components/Stories';
import Nav from "./Components/Nav";
import ListUsers from './Components/ListUsers';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/SignIn' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
          <Route exact path='/' />
          <PrivateRoute path='/UsersList' component={ListUsers} />
          <PrivateRoute path='/Profile/:id' component={Profile} />
          <PrivateRoute path='/Stories' component={Stories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

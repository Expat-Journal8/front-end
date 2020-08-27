import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './api/PrivateRoute';
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp";
import Profile from './Components/Profile';
import Stories from './Components/Stories';
import Nav from "./Components/Nav";
import ListUsers from './Components/ListUsers';
import EditUser from './Components/EditUser';
import EditStories from './Components/EditStories';
import UserStories from './Components/UserStories.js';
import './sass/Index.scss';

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
          <PrivateRoute exact path='/Profile/:id' component={Profile} />
          <PrivateRoute path='/Profile/:id/editProfile' component={EditUser} />
          <PrivateRoute exact path='/Stories' component={Stories} />
          <PrivateRoute path='/users/:id/stories' component={UserStories} />
          <PrivateRoute path='/users/:id/stories/editStory' component={EditStories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

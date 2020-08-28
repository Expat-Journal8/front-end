import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './api/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";
import Profile from './components/Profile';
import Stories from './components/Stories';
import Nav from "./components/Nav";
import ListUsers from './components/ListUsers';
import EditUser from './components/EditUser';
import EditStories from './components/EditStories';
import UserStories from './components/UserStories';
import Story from './components/Story';
import AddStory from './components/AddStory';
import './sass/Index.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/SignIn' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
          <Route exact path='/' component={SignUp} />
          <PrivateRoute exact path='/UsersList' component={ListUsers} />
          <PrivateRoute exact path='/Profile/:id' component={Profile} />
          <PrivateRoute exact path='/Profile/:id/editProfile' component={EditUser} />
          <PrivateRoute exact path='/Stories' component={Stories} />
          <PrivateRoute exact path='/users/:id/stories' component={UserStories} />
          <PrivateRoute exact path='/Story/:id/editStory' component={EditStories} />
          <PrivateRoute exact path='/Story/:id' component={Story} />
          <PrivateRoute exact path='/Stories/addStory' component={AddStory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

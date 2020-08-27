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
import UserStories from './Components/UserStories';
import Story from './Components/Story';
import AddStory from './Components/AddStory';
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

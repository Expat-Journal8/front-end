import React from 'react';
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp";
import Nav from "./Components/Nav";
import { Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/SignIn' component={SignIn} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/' />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Nav from "./Components/Nav";
import { Switch,Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/SignIn">
          <SignIn/>
        </Route>
        <Route path="/SignUp">
          <SignUp/>
        </Route>
        <Route path="/">
          Link to Ismails website please...
        </Route>
      </Switch>
    </div>
  );
}

export default App;

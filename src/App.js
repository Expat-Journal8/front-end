import React from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Nav from "./Components/Nav";
import NavII from "./Components/NavII";
import EditStories from "./Components/Stories";
import Postcard from "./Components/Postcard";
import Photo from "./Components/Photo";
import Globe from "./Components/GlobeBanner";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Switch>
        <Route path="/Stories"><NavII/><EditStories/></Route>
        <Route path="/Photos"><NavII/><Photo/></Route>
        <Route path="/Postcard"><NavII/><Postcard/></Route>
        <Route path="/Profile"><NavII/><Profile/></Route>
        <Route path="/SignIn"><Nav/><SignIn/></Route>
        <Route path="/SignUp"><Nav/><SignUp/> </Route>
        <Route path="/"><Nav/><Globe/></Route>
      </Switch>
    </div>
  );
}

export default App;

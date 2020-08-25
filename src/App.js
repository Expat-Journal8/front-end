import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/SignIn' component={SignIn} />
        <Route path='/SignUp' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Drinks from './pages/Drinks';
import Login from './pages/Login';
import Meals from './pages/Meals';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/meals" component={ Meals } />
      <Route exact path="/drinks" component={ Drinks } />
    </Switch>
  );
}

export default App;

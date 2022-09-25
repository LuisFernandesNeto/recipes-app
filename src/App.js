import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesProvider from './context';
import Drinks from './pages/Drinks';
import Login from './pages/Login';
import Meals from './pages/Meals';
import DrinkRecipe from './pages/DrinkRecipe';
import MealRecipe from './pages/MealRecipe';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/meals/:recipeId" component={ MealRecipe } />
        <Route exact path="/drinks/:recipeId" component={ DrinkRecipe } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;

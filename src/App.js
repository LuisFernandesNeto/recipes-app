import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Drinks from './pages/Drinks';
import Meals from './pages/Meals';
import FoodDetails from './pages/FoodDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipesProvider from './context';
import DrinkRecipe from './pages/DrinkRecipe';
import MealRecipe from './pages/MealRecipe';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/meals/{id-da-receita}" component={ FoodDetails } />
        <Route exact path="/drinks/{id-da-receita}" component={ FoodDetails } />
        <Route exact path="/meals/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/meals/:recipeId" component={ MealRecipe } />
        <Route exact path="/drinks/:recipeId" component={ DrinkRecipe } />
      </Switch>
    </RecipesProvider>
  );
}

export default App;

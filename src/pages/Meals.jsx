import React, { useContext, useEffect } from 'react';
import CategoryList from '../components/CategoryList';
import RecipeCardList from '../components/RecipeCardList';
import SearchBar from '../components/SearchBar';
import { RecipesContext } from '../context';
import { getMealOrDrinksFromAPI } from '../helpers/api';

function Meals() {
  const { setRecipes, setMealOrDrinks, category } = useContext(RecipesContext);

  async function getMeals() {
    const { meals } = await getMealOrDrinksFromAPI('meals', 'name', '', category);
    setRecipes(meals);
  }

  useEffect(() => {
    setMealOrDrinks('meals');
    getMeals();
  }, [category]);

  return (
    <>
      <SearchBar />
      <CategoryList />
      <RecipeCardList />
    </>
  );
}

export default Meals;

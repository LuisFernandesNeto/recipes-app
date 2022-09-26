import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import RecipeCardList from '../components/RecipeCardList';
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
      <Header page="Meals" search />
      <CategoryList />
      <RecipeCardList />
    </>
  );
}

export default Meals;

import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import RecipeCardList from '../components/RecipeCardList';
import { RecipesContext } from '../context';
import { getMealOrDrinksFromAPI } from '../helpers/api';

function Drinks() {
  const { setRecipes, setMealOrDrinks, category } = useContext(RecipesContext);

  async function getDrinks() {
    const { drinks } = await getMealOrDrinksFromAPI('drinks', 'name', '', category);
    setRecipes(drinks);
  }

  useEffect(() => {
    setMealOrDrinks('drinks');
    getDrinks();
  }, [category]);

  return (
    <>
      <Header page="Drinks" search />
      <CategoryList />
      <RecipeCardList />
    </>
  );
}

export default Drinks;

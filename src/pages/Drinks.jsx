import React, { useContext, useEffect } from 'react';
import CategoryList from '../components/CategoryList';
import RecipeCardList from '../components/RecipeCardList';
import SearchBar from '../components/SearchBar';
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
      <SearchBar />
      <CategoryList />
      <RecipeCardList />
    </>
  );
}

export default Drinks;

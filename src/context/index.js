import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [mealOrDrinks, setMealOrDrinks] = useState('meals');
  const [category, setCategory] = useState('');
  const maxCardsPerPage = 12;

  const context = {
    recipes: recipes.slice(0, maxCardsPerPage),
    setRecipes,
    mealOrDrinks,
    setMealOrDrinks,
    category,
    setCategory,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;

import { useContext } from 'react';
import { RecipesContext } from '../context';
import RecipeCard from './RecipeCard';

export default function RecipeCardList() {
  const { recipes, mealOrDrinks } = useContext(RecipesContext);
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={ recipe.idDrink || recipe.idMeal }
          recipeCard={ recipe }
          index={ index }
          mealOrDrinks={ mealOrDrinks }
        />
      ))}
    </div>
  );
}

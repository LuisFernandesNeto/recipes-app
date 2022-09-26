import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../helpers/api';

export default function MealRecipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();

  async function dispatchGetRecipe() {
    const result = await getRecipe('meals', recipeId);
    setRecipe(result);
  }

  useEffect(() => {
    dispatchGetRecipe();
  }, [recipeId]);

  return (
    <div>
      {recipe?.strMeal}
    </div>
  );
}

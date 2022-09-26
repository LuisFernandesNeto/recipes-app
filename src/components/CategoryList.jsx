import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../context';
import { getCategories } from '../helpers/api';

export default function CategoryList() {
  const { mealOrDrinks, setCategory, category } = useContext(RecipesContext);
  const [categories, setCategories] = useState([]);

  async function dispatchGetCategories() {
    const result = await getCategories(mealOrDrinks);
    setCategories(result);
  }

  function dispatchSetCategory(strCategory) {
    setCategory(category === strCategory ? '' : strCategory);
  }

  useEffect(() => {
    dispatchGetCategories();
  }, [mealOrDrinks]);

  return (
    <div>
      <button
        onClick={ () => dispatchSetCategory('') }
        type="button"
        data-testid="All-category-filter"
      >
        All

      </button>
      {categories.map(({ strCategory }) => (
        <button
          type="button"
          onClick={ () => dispatchSetCategory(strCategory) }
          data-testid={ `${strCategory}-category-filter` }
          key={ strCategory }
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}

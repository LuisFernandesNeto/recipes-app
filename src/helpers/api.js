const base = (mealOrDrinks) => (
  mealOrDrinks === 'meals' ? 'https://www.themealdb.com/api/json/v1/1' : 'https://www.thecocktaildb.com/api/json/v1/1'
);

export const getMealOrDrinksFromAPI = async (mealOrDrinks, type, search, category) => {
  const firstLetter = 'first-letter';
  let ENDPOINT = '';

  if (category) {
    ENDPOINT += `${base(mealOrDrinks)}/filter.php?c=${category}`;
  } else if (type === 'ingredient') {
    ENDPOINT = `${base(mealOrDrinks)}/filter.php?i=${search}`;
  } else if (type === 'name') {
    ENDPOINT = `${base(mealOrDrinks)}/search.php?s=${search}`;
  } else if (type === firstLetter && search.length !== 1) {
    global.alert('Your search must have only 1 (one) character');
  } else if (type === firstLetter) {
    ENDPOINT = `${base(mealOrDrinks)}/search.php?f=${search}`;
  }

  const response = await fetch(`${ENDPOINT}`);
  const json = await response.json();
  return json;
};

export const getCategories = async (mealOrDrinks) => {
  const maxCategories = 5;
  const response = await fetch(`${base(mealOrDrinks)}/list.php?c=list`);
  const json = await response.json();
  return json[mealOrDrinks].slice(0, maxCategories);
};

export const getRecipe = async (mealOrDrinks, idRecipe) => {
  const response = await fetch(`${base(mealOrDrinks)}/lookup.php?i=${idRecipe}`);
  const json = await response.json();
  return json[mealOrDrinks][0];
};

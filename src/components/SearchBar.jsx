import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecipesContext } from '../context';
import { getMealOrDrinksFromAPI } from '../helpers/api';

function SearchBar() {
  const [radioFilter, setRadioFilter] = useState({ checked: '' });
  const [inputSearch, setInputSearch] = useState('');
  const { setRecipes, category } = useContext(RecipesContext);
  const location = useLocation();

  const handleInputSearch = ({ target }) => {
    const { value } = target;
    setInputSearch(value);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setRadioFilter({
      checked: value,
    });
  };

  const handleClickMeals = async (event) => {
    event.preventDefault();
    const { checked } = radioFilter;
    const { meals } = await getMealOrDrinksFromAPI(
      'meals',
      checked,
      inputSearch,
      category,
    );
    setRecipes(meals);
  };

  const handleClickDrinks = async (event) => {
    event.preventDefault();
    const { checked } = radioFilter;
    const { drinks } = await getMealOrDrinksFromAPI(
      'drinks',
      checked,
      inputSearch,
      category,
    );
    setRecipes(drinks);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        value={ inputSearch }
        onChange={ handleInputSearch }
      />
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="filter-search-button"
          value="ingredient"
          onClick={ handleChange }
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          name="filter-search-button"
          value="name"
          onClick={ handleChange }
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="filter-search-button"
          value="first-letter"
          onClick={ handleChange }
        />
      </label>
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ location.pathname === '/meals' ? handleClickMeals : handleClickDrinks }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

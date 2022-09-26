import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import getMealOrDrinksFromAPI from '../helpers/getMealOrDrinksFromAPI';

function SearchBar() {
  const [radioFilter, setRadioFilter] = useState({ checked: '' });
  const [inputSearch, setInputSearch] = useState('');
  const firstLetter = 'first-letter';
  let ENDPOINT = '';
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

  const handleClickMeals = (event) => {
    event.preventDefault();
    const { checked } = radioFilter;
    if (checked === 'ingredient') {
      ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearch}`;
    } if (checked === 'name') {
      ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`;
    } if (checked === firstLetter && inputSearch.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    } if (checked === firstLetter) {
      ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch}`;
    } getMealOrDrinksFromAPI(ENDPOINT);
  };

  const handleClickDrinks = (event) => {
    event.preventDefault();
    const { checked } = radioFilter;
    if (checked === 'ingredient') {
      ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputSearch}`;
    } if (checked === 'name') {
      ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch}`;
    } if (checked === firstLetter && inputSearch.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    } if (checked === firstLetter) {
      ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputSearch}`;
    } getMealOrDrinksFromAPI(ENDPOINT);
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

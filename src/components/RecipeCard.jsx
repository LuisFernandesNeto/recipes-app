import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ mealOrDrinks, recipeCard, index }) {
  return (
    <Link to={ `/${mealOrDrinks}/${recipeCard.idMeal || recipeCard.idDrink}` }>
      <div data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ recipeCard.strMealThumb || recipeCard.strDrinkThumb }
          alt="Recipe"
        />
        <h3 data-testid={ `${index}-card-name` }>
          { recipeCard.strMeal || recipeCard.strDrink}
        </h3>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipeCard: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
  mealOrDrinks: PropTypes.string.isRequired,
};

const saveUserEmail = (email) => {
  localStorage.setItem('user', JSON.stringify(email));
};

const getUserEmail = () => {
  const user = localStorage.getItem('user');
  if (user) return JSON.parse(user);
  return {};
};

const saveMealsToken = (token) => {
  localStorage.setItem('mealsToken', token);
};

const getMealsToken = () => localStorage.getItem('mealsToken') || '';

const saveDrinksToken = (token) => {
  localStorage.setItem('drinksToken', token);
};

const getDrinksToken = () => localStorage.getItem('drinksToken') || '';

export {
  saveUserEmail,
  getUserEmail,
  saveMealsToken,
  getMealsToken,
  saveDrinksToken,
  getDrinksToken,
};

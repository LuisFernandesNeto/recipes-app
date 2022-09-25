const getMealOrDrinksFromAPI = async (ENDPONT) => {
  const response = await fetch(`${ENDPONT}`);
  const json = await response.json();
  return json;
};

export default getMealOrDrinksFromAPI;

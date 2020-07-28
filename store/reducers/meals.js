import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filersMeals: MEALS,
  favoriteMeals: []
};

const mealReducer = (state = initialState, action) => {
  return state;
};

export default mealReducer;

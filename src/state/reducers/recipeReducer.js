export const initialState = {
  recipe_name: "",
  recipe_description: "",
  recipe_image_key: null,
  recipe_prep_time: null,
  recipe_cook_time: null,
  recipe_total_time: null,
  recipe_categories: [],
  recipe_ingredients: [],
  recipe_instructions: [],
  recipe_tools: [],
}

export const ACTIONS = {
  UPDATE_RECIPE: "UPDATE_RECIPE",
  SET_RECIPE: "SET_RECIPE",
  RESET_RECIPE: "RESET_RECIPE",
};

const recipeReducer = (state = initialState, action) => {
  const { type, target, payload } = action;
  switch (type) {
    case ACTIONS.UPDATE_RECIPE:
      return { ...state, [target]: payload }
    case ACTIONS.SET_RECIPE:
      return state;
    case ACTIONS.RESET_RECIPE:
      return state;
    default:
      return state;
    };
};

export default recipeReducer;

import { FORM_ACTIONS as ACTIONS } from "../../utils/constants/reducerActions";
  
const formReducer = (state = {}, action) => {
  const { type, target, payload } = action;
  switch (type) {
    case ACTIONS.UPDATE_FORM_FIELD:
      return { ...state, [target]: payload }
    case ACTIONS.SET_FORM_FIELDS:
      return payload;
    case ACTIONS.RESET_FORM_FIELDS:
      return payload;
    default:
      return state;
  };
};

export default formReducer;

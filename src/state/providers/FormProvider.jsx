import { useReducer, useState } from "react";
import { formContext } from "../contexts";
import { formReducer } from "../reducers";
import { FORM_ACTIONS } from "../../utils/constants/reducerActions";

const FormProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [prevTabId, setPrevTabId] = useState(null);
  const [currentTabId, setCurrentTabId] = useState(0);
  const [formState, dispatch] = useReducer(formReducer, {});

  const setFormFields = (fields) => {
    dispatch({ type: FORM_ACTIONS.SET_FORM_FIELDS, payload: fields });
  };

  const completeFormSection = (section, isComplete) => {
    dispatch({ type: FORM_ACTIONS.UPDATE_FORM_FIELD, target: section, payload: isComplete });
  };

  const updateTabId = (id) => {
    setPrevTabId(currentTabId);
    setCurrentTabId(id);
  };



  return(
    <formContext.Provider value={{ tabs, formState, currentTabId, prevTabId, setTabs, dispatch, updateTabId, setFormFields, completeFormSection }}>
      {children}
    </formContext.Provider>
  )
}

export default FormProvider;

import { useReducer, useState } from "react";
import { formContext } from "../contexts";

const FormProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [currentTabId, setCurrentTabId] = useState(0);
  const [formState, dispatch] = useReducer({});

  const updateTabId = (id) => {
    // logic to check whether tab is locked
    setCurrentTabId(id);
  };

  return(
    <formContext.Provider value={{ tabs, formState, currentTabId, setTabs, dispatch, updateTabId }}>
      {children}
    </formContext.Provider>
  )
}

export default FormProvider;

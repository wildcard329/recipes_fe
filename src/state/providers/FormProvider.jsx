import { useReducer, useState } from "react";
import { formContext } from "../contexts";

const FormProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [formState, dispatch] = useReducer({});

  return(
    <multiStepFormContext.Provider value={{ tabs, setTabs }}>
      {children}
    </multiStepFormContext.Provider>
  )
}

export default FormProvider;

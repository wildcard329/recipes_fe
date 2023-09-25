import { useState } from "react";
import { accordionContext } from "../contexts";

const AccordionProvider = ({ children }) => {
  
  return(
    <accordionContext.Provider value={{}}>
      {children}
    </accordionContext.Provider>
  )
}

export default AccordionProvider;

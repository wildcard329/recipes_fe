import { useState } from "react";
import { pageNavContext } from "../contexts";

const PageNavProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState([]);

  return(
    <pageNavContext.Provider value={{ navLinks, setNavLinks }}>
      {children}
    </pageNavContext.Provider>
  )
}

export default PageNavProvider;

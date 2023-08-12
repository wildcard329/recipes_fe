import { useState } from "react"
import { userContext } from "../contexts";
import { useBool } from "../../utils/customhooks";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const {
    isTruthy: isLoggedIn,
    setTruthy: loginUser,
    setNotTruthy: logoutUser,
  } = useBool();

  return(
    <userContext.Provider 
      value={{ 
        user,
        isLoggedIn, 
        setUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;

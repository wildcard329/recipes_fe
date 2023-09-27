import { useState } from "react"
import { userContext } from "../contexts";
import { useBool, useAmplify } from "../../utils/customhooks";
import { generateRandomNumber } from "../../utils/functions/randomNumberGenerator.js";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { getUserById, addUser } = useAmplify();
  const {
    isTruthy: isLoggedIn,
    setTruthy: loginUser,
    setNotTruthy: logoutUser,
  } = useBool();

  const verifyUser = async (vUser) => {
    const userEmail = vUser?.attributes?.email;
    const { data: authUser } = await getUserById(userEmail);
    if (!authUser) {
      const authUsername = userEmail.split('@')[0].replace(/[0-9]/g, '');
      const randomId = generateRandomNumber();
      const updatedUsername = authUsername.concat(randomId);
      const newUser = {
        user_id: userEmail,
        username: updatedUsername,
      };
      await addUser(newUser);
      setUser(newUser);
    } else {
      setUser(authUser);
    };
  }

  return(
    <userContext.Provider 
      value={{ 
        user,
        isLoggedIn, 
        setUser,
        loginUser,
        logoutUser,
        verifyUser,
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;

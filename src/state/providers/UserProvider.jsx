import { useContext, useState } from "react"
import { userContext } from "../contexts";
import { useBool, useAmplify, useLocalStorage } from "../../utils/customhooks";
import { generateRandomNumber } from "../../utils/functions/randomNumberGenerator.js";

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider!");
  }
  return context;
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { getLocalStorageVal, removeLocalStorageVal } = useLocalStorage();
  const { getUserById, addUser, getGoogleAuthUser } = useAmplify();
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

  const checkUserAuth = async () => {
    const hasAttemptedLogin = getLocalStorageVal('hasAttemptedLogin');
    if (!isLoggedIn && hasAttemptedLogin) {
      try {
        const user = await getGoogleAuthUser();
        if (user?.username) {
          await loginUser();
          await verifyUser(user);
          await removeLocalStorageVal('hasAttemptedLogin');
        }
      } catch (error) {
        throw new Error("Unable to authenticate user.");
      };
    };
  };

  return(
    <userContext.Provider 
      value={{ 
        isLoggedIn, 
        user,
        checkUserAuth,
        loginUser,
        logoutUser,
        setUser,
        verifyUser,
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;

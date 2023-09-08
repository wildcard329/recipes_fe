import { useContext, useEffect } from "react";
import { useAmplify } from "../utils/customhooks"; 
import { userContext } from "../state/contexts";
import "./AuthPage.css";

const AuthPage = () => {
  const { authGoogle, getGoogleAuthUser } = useAmplify();
  const { loginUser, setUser } = useContext(userContext);

  const user = getGoogleAuthUser();

  useEffect(() => {
    console.log(user);
    if (user?.email) {
        setUser(user);
        loginUser();
    };
  }, [user]);
  return(
    <div>
      <button onClick={authGoogle}>Login with Google</button>
    </div>
  )
}

export default AuthPage;

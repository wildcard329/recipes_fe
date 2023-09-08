import { FcGoogle } from "react-icons/fc";
import { AppButton } from "../components/button";
import { useAmplify, useLocalStorage } from "../utils/customhooks"; 
import "./AuthPage.css";

const AuthPage = () => {
  const { authGoogle } = useAmplify();
  const { setLocalStorageKey } = useLocalStorage();

  const authenticateUser = async () => {
    await setLocalStorageKey('hasAttemptedLogin', true);
    await authGoogle();
  };

  return(
    <div className="login-container">
      <h3>Login Options</h3>
      <AppButton classname={"google-login-btn"} btnIcon={<FcGoogle />} btnLabel={"login with google"} btnCb={authenticateUser} />
    </div>
  )
}

export default AuthPage;

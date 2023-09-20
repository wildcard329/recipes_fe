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
    <div className="login-page page-content">
      <div className="login-container">
        <h3>Login Options</h3>
        <ul className="login-options">
          <li><AppButton classname={"google-login-btn"} btnIcon={<FcGoogle />} btnLabel={"login with google"} btnCb={authenticateUser} /></li>
        </ul>
      </div>
      <div className="page-filler"></div>
    </div>
  )
}

export default AuthPage;

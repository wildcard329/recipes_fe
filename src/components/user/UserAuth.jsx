import { useBool } from "../../utils/customhooks";
import { AppButton } from "../button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const UserAuth = () => {
  const { 
    isTruthy: isLoginActive, 
    setTruthy: activateLoginForm,
    setNotTruthy: deactivateLoginForm,
  } = useBool();
  const {
    isTruthy: isRegisterActive,
    setTruthy: activateRegisterForm,
    setNotTruthy: deactivateRegisterForm,
  } = useBool();
  
  return(
    <div>
      {!isLoginActive && !isRegisterActive ? 
        <div>
          <AppButton btnCb={activateLoginForm} btnLabel={"login"} classname={"primary header-btn"} />
          <AppButton btnCb={activateRegisterForm} btnLabel={"register"} classname={"secondary header-btn"} />
        </div>
      : isLoginActive ? 
        <LoginForm formCb={deactivateLoginForm} />
      : isRegisterActive ? 
        <RegisterForm formCb={deactivateRegisterForm} />
      : 
        null
      }
    </div>
  )
}

export default UserAuth;

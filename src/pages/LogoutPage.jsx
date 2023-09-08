import { useEffect, useContext } from "react";
import { useAmplify, useLocalStorage } from "../utils/customhooks";
import { userContext } from "../state/contexts";
import "./page.css"

const LogoutPage = () => {
  const { signoutUser } = useAmplify();
  const { clearLocalStorage } = useLocalStorage();
  const { logoutUser } = useContext(userContext);
  
  useEffect(() => {
    signoutUser();
    logoutUser();
    clearLocalStorage();
  }, []);

  return(
    <div className="page-content">
        <h1>Come again soon!</h1>
    </div>
  )
}

export default LogoutPage;

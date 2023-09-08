import { useEffect, useContext } from "react";
import { useAmplify } from "../utils/customhooks";
import { userContext } from "../state/contexts";

const LogoutPage = () => {
  const { signoutUser } = useAmplify();
  const { logoutUser } = useContext(userContext);
  
  useEffect(() => {
    signoutUser();
    logoutUser();
  }, []);

  return(
    <h1>Come again soon!</h1>
  )
}

export default LogoutPage;

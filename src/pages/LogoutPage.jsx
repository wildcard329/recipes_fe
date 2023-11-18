import { useEffect, useContext, useState } from "react";
import { useAmplify, useLocalStorage, useReactRouter } from "../utils/customhooks";
import { userContext } from "../state/contexts";
import "./page.css";
import "./LogoutPage.css";
import { Spinner1 } from "../components/loader";

const LogoutPage = () => {
  const { signoutUser } = useAmplify();
  const { clearLocalStorage } = useLocalStorage();
  const { logoutUser } = useContext(userContext);
  const { navTo } = useReactRouter();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      navTo("/");
    }
    return () => clearInterval(timer);
  }, [counter]);
  
  useEffect(() => {
    signoutUser();
    logoutUser();
    clearLocalStorage();
  }, []);

  return(
    <div className="page-content logout-container">
        <div className="logout-content">
          <h1>Come again soon!</h1>
          <div className="redirect-wrapper">
            <p>Redirecting to home in...</p>
            <span className="redirect-counter">{counter}</span>
            <Spinner1 size="small" />
          </div>
        </div>
        <div className="logout-filler"></div>
    </div>
  )
}

export default LogoutPage;

import { useAmplify } from "../utils/customhooks"; 
import "./AuthPage.css";

const AuthPage = () => {
  const { authGoogle } = useAmplify();

  return(
    <div>
      <button onClick={authGoogle}>Login with Google</button>
    </div>
  )
}

export default AuthPage;

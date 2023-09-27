import { useContext } from "react";
import { userContext } from "../state/contexts";

const UserProfile = () => {
  const { user } = useContext(userContext);

  const username = user?.username;

  return(
    <div>
      <span>Welcome, {username}!</span>
    </div>
  )
}

export default UserProfile;

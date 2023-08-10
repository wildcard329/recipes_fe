import { useState } from "react";
import UserAuth from "../user/UserAuth";
import "./header.css";

const HeaderMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <div className="header-menu">
      {<UserAuth />}
    </div>
  )
}

export default HeaderMenu;

import { useState, useContext } from "react";
import { userContext } from "../../state/contexts";
import UserAuth from "../user/UserAuth";
import UserMenuContainer from "../user/UserMenuContainer";
import "./header.css";

const HeaderMenu = () => {
  const { isLoggedIn } = useContext(userContext);

  return(
    <div className="header-menu">
      {isLoggedIn ?
        <UserMenuContainer />
      :
        <UserAuth />
      }
    </div>
  )
}

export default HeaderMenu;

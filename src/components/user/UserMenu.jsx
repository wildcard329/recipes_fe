import { useState, useContext } from "react";
import { userContext, recipeContext } from "../../state/contexts";
import { AppButton } from "../button";

const UserMenu = ({ closeMenuCb }) => {
  const { logoutUser } = useContext(userContext);

  const profileCb = () => closeMenuCb();
  const myRecipesCb = () => closeMenuCb();
  const myIngredientsCb = () => closeMenuCb();
  const logoutCb = () => {
    logoutUser();
    closeMenuCb();
  }

  return(
    <div className="user-menu absolute-right">
      <AppButton btnCb={profileCb} btnLabel={"profile"} classname={"primary menu-btn"} />
      <AppButton btnCb={myRecipesCb} btnLabel={"my recipes"} classname={"primary menu-btn"} />
      <AppButton btnCb={myIngredientsCb} btnLabel={"my ingredients"} classname={"primary menu-btn"} />
      <AppButton btnCb={logoutCb} btnLabel={"logout"} classname={"primary menu-btn"} />
    </div>
  )
}

export default UserMenu;

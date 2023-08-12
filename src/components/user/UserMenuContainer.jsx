import { AppButton } from "../button";
import { useBool } from "../../utils/customhooks";
import UserMenu from "./UserMenu";

const UserMenuContainer = () => {
  const { 
    isTruthy: isMenuOpen, 
    setNotTruthy: closeMenu, 
    setTruthy: openMenu, 
  } = useBool();

  return(
    isMenuOpen ?
      <UserMenu closeMenuCb={closeMenu} />
    :
      <AppButton btnLabel={"menu"} btnCb={openMenu} classname={"primary header-btn"} />
  )
}

export default UserMenuContainer;

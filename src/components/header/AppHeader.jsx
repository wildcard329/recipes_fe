import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppLogo from "../logo/AppLogo";
import HeaderLinksContainer from "./HeaderLinksContainer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useBool, useLocalStorage, useReactRouter } from "../../utils/customhooks";
import "./header.css";
import { useUserContext } from "../../state/providers/UserProvider";

const AppHeader = () => {
  const {
    isTruthy: isShowingLinks,
    setTruthy: showLinks,
    setNotTruthy: hideLinks,
  } = useBool();
  const { getLocalStorageVal } = useLocalStorage();
  const { routerPath } = useReactRouter();
  const { checkUser } = useUserContext();

  const handleMenu = () => isShowingLinks ? hideLinks() : showLinks();

  useEffect(() => {
    const username = getLocalStorageVal('Username');
    if (username) {
      checkUser();
    };
  }, []);

  useEffect(() => {
    hideLinks();
  }, [routerPath]);

  return(
    <header className="app-header">
      <div className="logo-container">
        <Link to="/">
          <AppLogo />
        </Link>
        <RxHamburgerMenu className="hamburger-icon" onClick={handleMenu} />
      </div>
      <HeaderLinksContainer isShowingLinks={isShowingLinks} />
    </header>
  )
}

export default AppHeader;
